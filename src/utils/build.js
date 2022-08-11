/**
 * @Author: yangqixin
 * @TIME: 2022/8/11 15:08
 * @FILE: build.js
 * @Email: 958292256@qq.com
 * @Description:
 */
import { getMapViewer } from '../components/MapContainer'
// 楼层功能操作集合
export default {
  resetAllBuildings() {
    const mapViewer = getMapViewer()
    if (mapViewer) {
      mapViewer.core.view3d.ResetAllBuildings()
    }
  },

  // build_id, split height, duration

  /**
   * 楼层动态分离
   * @param buildId
   * @param height
   * @param duration
   * @param callback
   */
  splitDynamicBuilding(buildId, height, duration = 1, callback) {
    const mapViewer = getMapViewer()
    if (mapViewer) {
      mapViewer.core.showCover()
      mapViewer.core.view3d.SplitDynamicBuilding(buildId, height, duration)
      setTimeout(() => {
        mapViewer.core.hideCover()

        callback && callback()
      }, (duration + 0.3) * 1000)
    }
  }
}

