/**
 * @Author: yangqixin
 * @TIME: 2022/8/10 17:08
 * @FILE: index.js
 * @Email: 958292256@qq.com
 * @Description: 首页定位 hooks
 */
import { useCallback, useRef, useEffect } from 'react'
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
  const runCallbackTimerRef = useRef(null)
  const flyToHomePosition = useCallback((callback = () => null) => {
    const mapViewer = getMapViewer()
    if (mapViewer) {
      const duration = 1
      mapViewer.camera.flyToPositionByOptions({
        position: homePosition,
        duration,
        onFinish: () => {
          if (runCallbackTimerRef.current) {
            clearTimeout(runCallbackTimerRef.current)
          }
          callback && callback()
        }
      })

      runCallbackTimerRef.current = setTimeout(() => {
        callback && callback()
      }, (duration + 0.5) * 1000)
    }
  }, [])

  const setHome = useCallback(() => {
    const mapViewer = getMapViewer()
    mapViewer.camera.setPosition(homePosition)
  }, [])

  useEffect(() => {
    window.addEventListener('beforeunload', () =>{
      setHome()
    })
  }, [])

  return {
    flyToHomePosition,
  }

}

export default useHomePosition

