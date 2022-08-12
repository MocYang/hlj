/**
 * @Author: yangqixin
 * @TIME: 2022/8/11 15:08
 * @FILE: build.js
 * @Email: 958292256@qq.com
 * @Description:
 */
import { getMapViewer } from '../components/MapContainer'

const scheduler = window.mapv3d.scheduler
const mapv3dUtils = window.mapv3d.utils

const { schedule, waitSchedule } = scheduler

const { functionExist } = window.mapv3d.error


/**
 * 楼栋管理基类
 */
class MapBuildingBase {
  constructor(mapViewer) {
    this.mapViewer = mapViewer
  }

  init(mapViewer) {
    this.mapViewer = mapViewer
  }
}

class MapBuildingUtils {
  constructor(buildInstance) {
    this.build = buildInstance
  }

  /**
   * 判断所传的 楼栋 ID 是否符合格式：V001_JZ0001 之类的
   * @param id
   * @return {Boolean}
   */
  isBuildingId(id) {
    const reg = /^V\d+_JZ\d+$/
    return reg.test(id)
  }

  /**
   *
   * @param id
   */
  isBuildingWK(id) {
    const reg = /^V\d+_JZ\d+_WK$/
    return reg.test(id)
  }
}

class MapBuildingEvent {
  constructor(buildInstance) {
    this.build = buildInstance
  }
}

/**
 * 底层楼栋接口
 */
class MapBuildingApi extends MapBuildingBase {
  constructor(buildInstance) {
    super()
    this.build = buildInstance
  }

  init(mapViewer) {
    super.init(mapViewer)
    this.core = this.mapViewer.core
    this.view3d = this.core.view3d
  }

  /**
   * 获取建筑物数量
   * @returns {Promise<{num: Number}>}
   */
  getBuildingNum() {
    if (functionExist(this.view3d, this.view3d.GetBuildingNum)) {
      return schedule(this.view3d, this.view3d.GetBuildingNum)
    }
  }

  /**
   * 获取建筑物名称列表
   * @returns {Promise<Array<{id: String, name: String, visible: Boolean}>>}
   */
  getBuildingNames() {
    if (functionExist(this.view3d, this.view3d.GetBuildingNames)) {
      return schedule(this.view3d, this.view3d.GetBuildingNames)
    }
  }

  /**
   * 获取建筑物名称列表 - 有楼层
   * 与getBuildingNames返回值相同，与期望的返回楼层信息不符合，不用这个接口
   * @deprecated
   * @returns {Promise<Array<{id: String, name: String, visible: Boolean}>>}
   */
  getSplitBuildingNames() {
    if (functionExist(this.view3d, this.view3d.GetSplitBuildingNames)) {
      return schedule(this.view3d, this.view3d.GetSplitBuildingNames)
    }
  }

  /**
   * 获取建筑物是否显示
   * @param id
   * @return {Promise<{name: String, visible: Boolean}> | undefined}
   */
  getBuildingVisible(id) {
    if (!this.build.utils.isBuildingId(id)) {
      console.error(`建筑 id: ${id}, 不符合格式：V001_JZ0001`)
      return
    }

    if (functionExist(this.view3d, this.view3d.GetBuildingVisible)) {
      return schedule(this.view3d, this.view3d.GetBuildingVisible, id)
    }
  }

  /**
   * 设置建筑物的显示/隐藏
   * @desc 会将所有楼层，外壳同时显示/隐藏。且保留楼层分层的状态，保持外壳的显示隐藏状态
   * @param id
   * @param visible
   * @param wait
   * @returns {*}
   */
  setBuildingVisible(id, visible, wait = 20) {
    if (!this.build.utils.isBuildingId(id)) {
      console.error(`建筑 id: ${id}, 不符合格式：V001_JZ0001`)
      return
    }

    if (functionExist(this.view3d, this.view3d.SetBuildingVisible)) {
      return waitSchedule(wait, this.view3d, this.view3d.SetBuildingVisible, id, visible)
    }
  }

  /**
   * 设置建筑物外壳的显示和隐藏
   * @param id
   * @param visible
   * @param wait
   * @returns {*}
   */
  setBuildingWkVisible (id, visible, wait = 20) {
    if (!this.build.utils.isBuildingId(id)) {
      console.error(`建筑 id: ${id}, 不符合格式：V001_JZ0001`)
      return
    }

    console.log('set building wk visible: ', id, visible)
    if (functionExist(this.view3d, this.view3d.SetBuildingWkVisible)) {
      return waitSchedule(wait, this.view3d, this.view3d.SetBuildingWkVisible, id, visible)
    }
  }

  /**
   *
   * @param wait {Number}
   * @returns {Promise<any>}
   */
  resetAllBuildings(wait = 20) {
    if (functionExist(this.view3d, this.view3d.ResetAllBuildings)) {
      return waitSchedule(wait, this.view3d, this.view3d.ResetAllBuildings)
    }
  }
}

/**
 * 楼栋相关操作
 */
class MapBuild extends MapBuildingBase {
  constructor() {
    super()

    // 功能函数类实例
    this.utils = new MapBuildingUtils(this)

    // 底层接口实例
    this.api = new MapBuildingApi(this)

    this.buildingNames = []

    this.buildingInfo = new Map()
  }

  init(mapViewer) {
    super.init(mapViewer)
    this.api.init(mapViewer)
  }


  // 获取一遍所有的楼层实体信息，会包含：楼层边界点位：bmax,bmin
  // 因为这是不紧急的任务，所以，不应该阻塞页面
  getAllBuildingInfo() {
    this.getBuildingNames((buildingNames, callback) => {
      let buildingNumbers = buildingNames.length
      let i = 0
      for (let build of buildingNames) {
        this.getBuildingInfo(build.id, info => {
          i++

          this.setBuildingInfo(build, info)

          if (i === buildingNumbers - 1) {
            callback && callback(this.buildingInfo)
          }
        })
      }
    })
  }

  /**
   * 获取单个建筑的实体信息
   */
  getBuildingInfo(buildId, callback) {
    const mapViewer = getMapViewer()
    if (mapViewer) {
      mapViewer.drawer.findObjectById(buildId).then(res => {
        callback && callback(res)
      })
    }
  }

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

  // 单个建筑还原
  splitBuildingReset(buildId) {
    if (!buildId) {
      return
    }
    const mapViewer = getMapViewer()
    if (mapViewer) {
      mapViewer.core.view3d.SplitBuildingReset(buildId, 5)
    }
  }

  // 楼层操作 API
  // 获取楼层数
  getFloorNum(buildId, callback) {
    const mapViewer = getMapViewer()
    if (mapViewer) {
      mapViewer.core.view3d.GetFloorNum(buildId, res => {
        callback && callback(res)
      })
    }
  }

  // 获取楼层名称列表
  getFloorNames(buildId, callback) {
    const mapViewer = getMapViewer()
    if (mapViewer) {
      mapViewer.core.view3d.GetFloorNames(buildId, res => {
        callback && callback(res)
      })
    }
  }

  /**
   * 楼层动态侧平移
   * @param buildId
   * @param floorId
   * @param height
   * @param duration
   * @param callback
   * @TODO: 传参优化
   */
  splitDynamicFloor(buildId, floorId, height, duration, callback) {
    const mapViewer = getMapViewer()
    if (mapViewer) {
      mapViewer.core.showCover()
      mapViewer.core.view3d.SplitDynamicFloor(buildId, floorId, height, duration)
      setTimeout(() => {
        mapViewer.core.hideCover()
        callback && callback()
      }, (duration + 0.3) * 1000)
    }
  }


  /**
   * 楼层显示和隐藏 - 无动态效果
   * @param buildId
   * @param floorId
   * @param visible
   */
  setFloorVisible(buildId, floorId, visible) {

  }
}

/**
 * 楼层操作相关类
 */
class MapFloor extends MapBuildingBase {
  constructor(mapViewer) {
    super(mapViewer)
  }
}


export default new MapBuild()

