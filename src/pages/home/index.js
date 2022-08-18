import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import MapContainer, { getConfigJson, getMapViewer } from '../../components/MapContainer'

import { allRoomUseStatusConfig, cameraListConfig, initUrlConfig } from '../../api'

import makeServer from '../../api/mock/server'
import Header from '../../components/Header'
import Background from '../../components/Background'
import Admin from '../../components/Admin'

import Navigation from '../../components/navigation'
import useHomePosition from '../../hooks/useHomePosition'
import Build from '../../utils/build'
import VideoPreviewPopup from './popup/VideoPreviewPopup'

import useRequest from '../../hooks/useRequest'
import { setIsVideoPreviewPopupShow, setClickCameraConfig } from './popup/VideoPreviewPopup/slice'
import { previewUrlConfig } from './popup/VideoPreviewPopup/api'
import { usePopupController } from '../../components/popup/PopupContainer'

function Index() {
  const dispatch = useDispatch()
  const popupController = usePopupController()

  // config.json配置文件
  const [configFile, setConfigFile] = useState({})

  // 监控列表数据
  const [cameraList, setCameraList] = useState([])

  // 所有房间的使用情况
  const [allUseRoomInfo, setAllUseRoomInfo] = useState([])

  const [activeFloor, setActiveFloor] = useState(null)

  const { resetHome } = useHomePosition()

  const { run: fetchCameraList } = useRequest()

  const { run: fetchPreviewUrl } = useRequest()

  const { run: fetchAllUseRoomInfo} = useRequest()

  const addCameraHandler = () => {
    // 监听监控点击事件
    const mapViewer = getMapViewer()
    mapViewer.event.onClick("CAMERA", res => {
      const cameraInfo = res.attr
      if (cameraInfo) {
        // 通过监控编码，获取取流地址
        fetchPreviewUrl(previewUrlConfig({
          cameraIndexCode: cameraInfo.device_code,
          transmode: 1
        })).then(res => {
          if (res) {
            dispatch(setClickCameraConfig({
              ...cameraInfo,
              url: res.data.url
            }))
          }
        })
      }

      popupController.activate(setIsVideoPreviewPopupShow)
    })
  }

  // 获取所有监控列表
  const handleFetchCameraList = () => {
    fetchCameraList(cameraListConfig()).then(res => {
      if (res.code === 0) {
        setCameraList(res.data)
      }
    })
  }

  // 获取所有房间的使用情况
  const handleFetchAllUseRoomInfo = ()=> {
    fetchAllUseRoomInfo(allRoomUseStatusConfig()).then(res =>{
      if (res.code === 0) {
        setAllUseRoomInfo(res.data)
      }
    })
  }

  // 地图初始化成功后的回调
  const handleSuccess = useCallback((mapViewer) => {
    const config = getConfigJson()

    initUrlConfig(config)

    Build.init(mapViewer)

    // environments = MOCK 才用mock server
    if (config && config.environments === 'MOCK') {
      makeServer()
    }

    // 默认定位到指定视角
    resetHome()

    handleFetchCameraList()

    addCameraHandler()

    setConfigFile(config)
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
          // return mapViewer.drawer.config.image({
          //   attr: {
          //     id: camera.id,
          //     device_code: camera.device_code,
          //     device_name: camera.device_name
          //   },
          //   scale: 1,
          //   gid: `CAMERA_${camera.model_url}`,
          //   location: handleGetSplitEntitiesHeight(camera.list_style, floorNumber),
          //   style: 'qiangji_icon'
          // })
          return mapViewer.drawer.config.model({
            attr: {
              id: camera.id,
              device_code: camera.device_code,
              device_name: camera.device_name
            },
            scale: 1,
            gid: `CAMERA_${camera.model_url}`,
            location: handleGetSplitEntitiesHeight(camera.list_style, floorNumber),
            fileName: 'qiangji'
          })
        })

        mapViewer.model.getController().addMany(cameraIconConfig, {
          onSuccess: () => {
            setTimeout(() => {
              mapViewer.event.reBind()
            }, 100)
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

      {/*视频预览弹窗*/}
      <VideoPreviewPopup platformIp={configFile && configFile.hikVideoPlatformIp || ''} />
    </>
  )
}

export default Index
