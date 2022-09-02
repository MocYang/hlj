/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/9/1 21:53
 * @File: index.js
 * @Description
 */
import { useCallback } from 'react'
import Build from '../../utils/build'
import { getMapViewer } from '../../components/MapContainer'

const useRoomClick = () => {
  const init = useCallback(() => {
    const mapViewer = getMapViewer()
    const onRoomClick = res => {
      if (res.gid) {
        const roomPosition = res.onMousePoint
        mapViewer.camera.getCurrentPosition().then(current => {
          mapViewer.camera.flyToPositionByOptions({
            position: {
              x: roomPosition.x,
              y: roomPosition.y,
              z: roomPosition.z + 2000,
              pitch: 90,
              roll: current.roll,
              yaw: current.yaw
            }
          })
        })
      }
    }

    mapViewer.event.onClick('V', onRoomClick, {
      compare: gid => Build.utils.isRoomId(gid)
    })

    mapViewer.event.onClick("area_", onRoomClick)
  }, [])

  return {
    init
  }
}

export default useRoomClick
