import { useCallback, useEffect, useState } from 'react'
import MapContainer, { getConfigJson, getMapViewer } from '../../components/MapContainer'
import { cameraListConfig, initUrlConfig } from '../../api'

import makeServer from '../../api/mock/server'

import Header from '../../components/Header'
import Background from '../../components/Background'
import Admin from '../../components/Admin'
import Navigation from '../../components/navigation'

import useHomePosition from '../../hooks/useHomePosition'
import Build from '../../utils/build'
import useRequest from '../../hooks/useRequest'

function Index() {

  // 监控列表数据
  const [cameraList, setCameraList] = useState([])

  const [activeFloor, setActiveFloor] = useState(null)

  const { resetHome } = useHomePosition()

  const { run: fetchCameraList } = useRequest()

  const addCameraHandler = () => {
    // TODO: 监听监控点击事件
    const mapViewer = getMapViewer()
    mapViewer.event.onClick("CAMERA", res => {
      console.log(res)
    })
  }

  const handleFetchCameraList = () => {
    fetchCameraList(cameraListConfig()).then(res => {
      if (res.code === 0) {
        setCameraList(res.data)
      }
    })
  }

  // 地图初始化成功后的回调
  const handleSuccess = useCallback((mapViewer) => {
    const config = getConfigJson()

    let api = config.api

    initUrlConfig(api)

    Build.init(mapViewer)

    // environments = MOCK 才用mock server
    if (config && config.environments === 'MOCK') {
      makeServer()
    }

    // 默认定位到指定视角
    resetHome()

    handleFetchCameraList()

    addCameraHandler()
  }, [])

  // 计算楼层分层后的点位的高度
  const handleGetSplitEntitiesHeight = (position, floorNumber) => {
    const configFile = getConfigJson()
    return {
      ...position,
      // * 2是因为 底层接口设置的高度，为高度参数的 2 倍
      z: position.z + (floorNumber - 1) * configFile.splitHeight * 100 * 2
    }
  }

  // 楼层变化后，做模型分层显示
  useEffect(() => {
    const mapViewer = getMapViewer()

    if (mapViewer) {
      if (cameraList.length > 0 && activeFloor) {
        const mapViewer = getMapViewer()
        mapViewer.drawer.remove.all()

        const buildId = activeFloor.buildId
        const floorName = activeFloor.floorId
        const floorNumber = Build.utils.getFloorNumberFromFloorName(floorName)

        // 提取指定楼层的监控
        const cameraInCurrentFloor = cameraList.filter(camera => {
          const cameraFloorName = Build.utils.getFloorNameFromFloorId(camera.floor_id)
          return camera.build_id === buildId && cameraFloorName === floorName
        })


        // 生成要上图的监控图标配置
        const cameraIconConfig = cameraInCurrentFloor.map(camera => {
          return mapViewer.drawer.config.image({
            gid: `CAMERA_${camera.model_url}`,
            location: handleGetSplitEntitiesHeight(camera.list_style, floorNumber),
            style: 'qiangji_icon'
          })
        })

        mapViewer.model.getController().addMany(cameraIconConfig, {
          onSuccess: () => {
            // console.log('模型添加完毕!')
            mapViewer.event.reBind()
          }
        })
      } else {
        mapViewer.drawer.remove.all()
      }
    }
  }, [cameraList, activeFloor])


  const handleSetActiveFloor = (floor) => {
    if (activeFloor !== floor) {
      setActiveFloor(floor)
    }
  }

  return (
    <>
      <MapContainer
        onSuccess={handleSuccess}
      />

      {/*背景边框*/}
      <Background />

      {/*页头*/}
      <Header />

      {/*楼层分层按钮*/}
      <Navigation onChange={handleSetActiveFloor} />

      {/*开发环境下，会显示的测试面板*/}
      <Admin />
    </>
  )
}

export default Index
