import Scene, { getConfigJson, getMapInstanceByKey } from '@ty/Scene'
import { initUrlConfig} from '../../api'
import makeServer from '../../api/mock/server'
// import Bac from '../../components/bac'
import Bounced from '../../components/bounced'
import Navigation from '../../components/navigation'
const sceneCtl = Scene()
const SceneComp = sceneCtl.Dom

// 获取 mapViewer 实例
export const getMapViewer = () => {
  return getMapInstanceByKey('light')
}


function Index() {
  
  // 地图初始化成功后的回调
  const handleSuccess = () => {
    console.log('地图初始化成功！')
    console.log(getMapViewer())

    const config = getConfigJson()

    let api = config.api

    initUrlConfig(api)

    // environments = MOCK 才用mock server
    if (config && config.environments === 'MOCK') {
      makeServer()
    }
  }

  return (
   <>
   <SceneComp
      onMapSuccess={handleSuccess}
      retryCount={5}
      retryInterval={100}
    />

    {/* <Bac/>  */}

    <Bounced/>

    <Navigation/>
   </> 
  )
}

export default Index
