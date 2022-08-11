/**
 * @Author: yangqixin
 * @TIME: 2022/8/10 17:08
 * @FILE: index.js
 * @Email: 958292256@qq.com
 * @Description: 首页定位 hooks
 */
import { useCallback } from 'react'
import { getMapViewer } from '../../pages/home'

const homePosition = {
  pitch: 58.651084899902344,
  roll: 0.00005850227898918092,
  x: -40850.140625,
  y: -19520.83203125,
  yaw: -179.82424926757812,
  z: 9029.3408203125
}

function useHomePosition() {
  const resetHome = useCallback(() => {
    const mapViewer = getMapViewer()

    mapViewer.camera.flyToPositionByOptions({
      position: homePosition
    })
  }, [])

  return {
    resetHome
  }

}

export default useHomePosition

