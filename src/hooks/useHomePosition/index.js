/**
 * @Author: yangqixin
 * @TIME: 2022/8/10 17:08
 * @FILE: index.js
 * @Email: 958292256@qq.com
 * @Description: 首页定位 hooks
 */
import { useCallback } from 'react'
import { getMapViewer } from '../../components/MapContainer'

const homePosition = {
  pitch: 37.819576263427734,
  roll: 0.00007462591020157561,
  x: -36908.7265625,
  y: -19848.73046875,
  yaw: 179.79800415039062,
  z: 10834.1015625
}

function useHomePosition() {
  const flyToHomePosition = useCallback((callback) => {
    const mapViewer = getMapViewer()
<<<<<<< HEAD
    if(mapViewer) {
      mapViewer.camera.flyToPositionByOptions({
        position: homePosition,
        duration: 1,
        onFinish: () => {
          callback && callback()
        }
      })
    }

=======
    mapViewer.camera.flyToPositionByOptions({
      position: homePosition,
      duration: 1,
      onFinish: () => {
        callback && callback()
      }
    })
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
  }, [])

  const setHome = useCallback(() => {
    const mapViewer = getMapViewer()
    mapViewer.camera.setPosition(homePosition)
  }, [])

  return {
    flyToHomePosition,
    setHome
  }

}

export default useHomePosition

