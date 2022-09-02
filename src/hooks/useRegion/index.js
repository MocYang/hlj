/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/19 19:51
 * @File: index.js
 * @Description 区域划分
 */
import { useCallback, useEffect } from 'react'
import { getMapViewer } from '../../components/MapContainer'
import regionConfig from './config'

const useRegion = ({ floor }) => {
  const init = useCallback(() => {

  }, [])

  useEffect(() => {
    // 只在1楼显示的情况下,显示区域面
    if (floor && floor.length > 0) {
      const mapViewer = getMapViewer()

      let isFirstFloorVisible = false
      for (let f of floor) {
        if (f.floorId === 'F001') {
          isFirstFloorVisible = f.active
        }
      }

      // 一楼可见是,显示楼层
      if (isFirstFloorVisible) {
        let allRegions = []
        for (let [, region] of Object.entries(regionConfig)) {
          allRegions = allRegions.concat(region.areas.map(polygon => ({
            ...polygon,
            linewidth: 0,
            linevisible: false,
            // 同一个区域，赋予统一的面材质
            style: region.polygon,
            points: polygon.points.map(p => ({
              ...p,
              z: p.z - 10
            }))
          })))
        }

        mapViewer.model.getController().addMany(allRegions, {
          success: res => {
            console.log('所有区域绘制完成')
            mapViewer.event.reBind()
          }
        })
      }
    }
  }, [floor])

  return {
    init
  }
}

export default useRegion
