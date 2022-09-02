/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/19 19:51
 * @File: index.js
 * @Description 区域划分
 */
import { useEffect } from 'react'
import { getMapViewer } from '../../components/MapContainer'
import regionConfig from './config'
import { createUUID } from '../../utils'

const useRegion = ({
  floor,
  setRegion
}) => {
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
      let regionEntities = {}
      let allRegions = []

      // 一楼可见是,显示楼层
      if (isFirstFloorVisible) {
        for (let [key, region] of Object.entries(regionConfig)) {
          let currentRegions = region.areas.map(polygon => ({
            ...polygon,
            gid: 'area_' + createUUID(),
            linewidth: 0,
            linevisible: false,
            // 同一个区域，赋予统一的面材质
            style: region.polygon,
            points: polygon.points.map(p => ({
              ...p,
              z: p.z - 10
            }))
          }))

          regionEntities[key] = currentRegions

          allRegions.push(...currentRegions)
        }

        mapViewer.model.getController().addMany(allRegions, {
          onSuccess: res => {
            // 缓存添加的面
            mapViewer.event.reBind()

            setTimeout(() => {
              setRegion(regionEntities)
            }, 50)
          }
        })
      }
    }
  }, [floor])
}

export default useRegion
