import { useCallback, useState } from 'react'
import MapContainer, { getConfigJson } from '../../components/MapContainer'

import { initUrlConfig } from '../../api'

import makeServer from '../../api/mock/server'
import Header from '../../components/Header'
import Background from '../../components/Background'
import Admin from '../../components/Admin'
import RegionLabel from '../../hooks/useRegion/RegionLabel'

import Navigation from '../../components/navigation'
import useHomePosition from '../../hooks/useHomePosition'
import Build from '../../utils/build'
import VideoPreviewPopup from './popup/VideoPreviewPopup'
import RoomInfoPopup from './popup/roomInfoPopup'
import MachineInfoPopup from './popup/machineInfoPopup'
import useMachineInfo from '../../hooks/useMachineInfo'
import useCamera from '../../hooks/useCamera'
import useRoomStatus, { useRoomIconClick } from '../../hooks/useRoomStatus'
import useZoom from '../../hooks/useZoom'
import useWindowVisible from '../../hooks/useWindowVisible'
import useRegion from '../../hooks/useRegion'
import useAnimateSequence from '../../hooks/useAnimateSequence'
import floorConfig from '../../components/navigation/floorConfig'
import useRoomClick from '../../hooks/useRoomClick'

function Index() {
  // config.json配置文件
  const [configFile, setConfigFile] = useState({})

  const [activeFloors, setActiveFloors] = useState(
    floorConfig.map((floor) => ({
      ...floor,
      active: false
    }))
  )

  // 页面打开时，会做初始定位，只有等初始定位就绪，才允许楼层的点击分层操作
  const [resetHomeFinish, setResetHomeFinish] = useState(false)

  // 保存绘制的区域面
  const [regionEntities, setRegionEntities] = useState([])

  const { init } = useZoom()

  // 房间点击 - 先不开放,有些房间的坐标有问题.
  const { init: initRoomClick } = useRoomClick()

  const { init: initWindow, setVisible: setWindowVisible } = useWindowVisible({
    prefix: 'chuang'
  })

  // 初始视角定位
  const { flyToHomePosition } = useHomePosition()

  // 监控信息
  const { fetchCamera } = useCamera({
    floor: activeFloors
  })

  // 房间使用信息
  useRoomStatus({
    floor: activeFloors
  })

  // 机房信息
  useMachineInfo({
    floor: activeFloors
  })

  // 房间内人物图标
  const { addPersonIconClick } = useRoomIconClick()

  // 区域划分
  useRegion({
    floor: activeFloors,
    setRegion: setRegionEntities
  })

  const { play } = useAnimateSequence("NewLevelSequence")

  // 地图初始化成功后的回调
  const handleSuccess = useCallback((mapViewer) => {
    const config = getConfigJson()

    initUrlConfig(config)

    mapViewer.event.debug = true

    mapViewer.event.setDragTicker(180)

    // environments = MOCK 才用mock server
    if (config && config.environments === 'MOCK') {
      makeServer()
    }

    initWindow()

    play(mapViewer, () => {
      // 默认定位到指定视角
      flyToHomePosition(() => {
        Build.init(mapViewer)

        setResetHomeFinish(true)
      })

      fetchCamera()

      setConfigFile(config)

      // 监听人物图标的点击
      addPersonIconClick()

      // zoom init
      init()

      initRoomClick()
    })

  }, [])

  const handleSetActiveFloor = (floor) => {
    setActiveFloors(floor)
  }

  return (
    <>
      <MapContainer onSuccess={handleSuccess}>
        {/*背景边框*/}
        <Background />

        {/*页头*/}
        <Header />

        {/*楼层分层按钮*/}
        <Navigation
          activeFloors={activeFloors}
          setActiveFloors={setActiveFloors}
          onChange={handleSetActiveFloor}
          resetHomeFinish={resetHomeFinish}
          setWindowVisible={setWindowVisible}
        />

        {/*开发环境下，会显示的测试面板*/}
        <Admin />

        {/*房间内-人员，环境信息弹窗*/}
        <RoomInfoPopup />

        {/*机房信息弹窗*/}
        <MachineInfoPopup />

        <RegionLabel
          floor={activeFloors}
          regionEntity={regionEntities}
          setActiveFloors={setActiveFloors}
        />

        {/*视频预览弹窗*/}
        <VideoPreviewPopup
          platformIp={(configFile && configFile.hikVideoPlatformIp) || ''}
        />
      </MapContainer>
    </>
  )
}

export default Index
