import { useCallback, useState } from 'react'
import MapContainer, { getConfigJson } from '../../components/MapContainer'

import { initUrlConfig } from '../../api'

import makeServer from '../../api/mock/server'
import Header from '../../components/Header'
import Background from '../../components/Background'
import Admin from '../../components/Admin'

import Navigation from '../../components/navigation'
import useHomePosition from '../../hooks/useHomePosition'
import Build from '../../utils/build'
import VideoPreviewPopup from './popup/VideoPreviewPopup'

import useCamera from '../../hooks/useCamera'
import useRoomStatus from '../../hooks/useRoomStatus'

function Index() {

  // config.json配置文件
  const [configFile, setConfigFile] = useState({})

  const [activeFloor, setActiveFloor] = useState(null)

  const { resetHome } = useHomePosition()

  const { fetchCamera } = useCamera({
    floor: activeFloor
  })

  useRoomStatus({
    floor: activeFloor
  })

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

    fetchCamera()

    setConfigFile(config)
  }, [])


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
