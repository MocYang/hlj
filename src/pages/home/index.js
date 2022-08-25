import { useCallback, useState, useEffect } from 'react'
import MapContainer, { getConfigJson, getMapViewer } from '../../components/MapContainer'

import { initUrlConfig } from '../../api'

import makeServer from '../../api/mock/server'
import Header from '../../components/Header'
import Background from '../../components/Background'
import Admin from '../../components/Admin'

import Navigation from '../../components/navigation'
import useHomePosition from '../../hooks/useHomePosition'
import Build from '../../utils/build'
import VideoPreviewPopup from './popup/VideoPreviewPopup'
import RoomInfoPopup from './popup/roomInfoPopup'
import MachineInfoPopup from './popup/machineInfoPopup'

import useCamera from '../../hooks/useCamera'
import useRoomStatus, { useRoomIconClick } from '../../hooks/useRoomStatus'
<<<<<<< HEAD
import useZoom from '../../hooks/useZoom'
=======

>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
function Index() {

  // config.json配置文件
  const [configFile, setConfigFile] = useState({})

  const [activeFloor, setActiveFloor] = useState(null)

<<<<<<< HEAD
  const {init} = useZoom()

=======
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
  const {
    flyToHomePosition,
    setHome
  } = useHomePosition()

  // 监控信息
  const { fetchCamera } = useCamera({
    floor: activeFloor
  })

  // 房间使用信息
  useRoomStatus({
    floor: activeFloor
  })

  const {addPersonIconClick} = useRoomIconClick()

  // 地图初始化成功后的回调
  const handleSuccess = useCallback((mapViewer) => {
    const config = getConfigJson()

    initUrlConfig(config)

<<<<<<< HEAD
    mapViewer.event.debugger = true
=======
    // environments = MOCK 才用mock server
    if (config && config.environments === 'MOCK') {
      makeServer()
    }
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6

    // 默认定位到指定视角
    flyToHomePosition(() => {
      Build.init(mapViewer)
    })

<<<<<<< HEAD
    // environments = MOCK 才用mock server
    if (config && config.environments === 'MOCK') {
      makeServer()
    }

=======
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
    fetchCamera()

    setConfigFile(config)

    // 监听人物图标的点击
    addPersonIconClick()
<<<<<<< HEAD

    // zoom init
    init()
=======
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
  }, [])


  const handleSetActiveFloor = (floor) => {
    if (activeFloor !== floor) {
      setActiveFloor(floor)
    }
  }

  useEffect(() => {
    return () => {
      const mapViewer = getMapViewer()
      if (mapViewer) {
        // 页面卸载前，先视角设置为初始视角，下次页面再打开就直接能显示初始视角。
        setHome()
      }
    }
  }, [])

  return (
    <>
      <MapContainer
        onSuccess={handleSuccess}
      >
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

        {/*房间内-人员，环境信息弹窗*/}
        <RoomInfoPopup/>

        {/*机房信息弹窗*/}
        <MachineInfoPopup/>
      </MapContainer>
    </>
  )
}

export default Index
