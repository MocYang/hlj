import { useCallback } from 'react'
import MapContainer, { getConfigJson } from '../../components/MapContainer'
import { initUrlConfig } from '../../api'

import makeServer from '../../api/mock/server'

import Header from '../../components/Header'
import Background from '../../components/Background'
import Admin from '../../components/Admin'
import Navigation from '../../components/navigation'

import useHomePosition from '../../hooks/useHomePosition'

function Index() {

  const { resetHome } = useHomePosition()

  // 地图初始化成功后的回调
  const handleSuccess = useCallback(() => {
    const config = getConfigJson()

    let api = config.api

    initUrlConfig(api)

    // environments = MOCK 才用mock server
    if (config && config.environments === 'MOCK') {
      makeServer()
    }

    // 默认定位到指定视角
    resetHome()
  }, [])

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
      <Navigation/>

      {/*开发环境下，会显示的测试面板*/}
      <Admin />
    </>
  )
}

export default Index
