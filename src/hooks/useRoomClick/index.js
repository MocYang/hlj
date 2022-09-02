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
    mapViewer.event.onClick('V', res => {
      if (res.gid) {
        const roomPosition = res.position
        mapViewer.camera.getCurrentPosition().then(current => {
          mapViewer.camera.flyToPositionByOptions({
            position: {
              x: roomPosition.x,
              y: roomPosition.y,
              z: roomPosition.z + 1500,
              pitch: 90,
              roll: current.roll,
              yaw: current.yaw
            }
          })
        })
      }
    }, {
      compare: gid => Build.utils.isRoomId(gid)
    })
  }, [])

  return {
    init
  }
}

export default useRoomClick
