/**
 * @Author: yangqixin
 * @TIME: 2022/8/11 15:08
 * @FILE: build.js
 * @Email: 958292256@qq.com
 * @Description:
 */

const scheduler = window.mapv3d.scheduler
// const mapv3dUtils = window.mapv3d.utils

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

  isFloorName(floorName) {
    const reg = /^[B|F]\d+$/

    return reg.test(floorName)
  }

  // V001_JZ0001#F001
  isFloorId(floorId) {
    const reg = /^V\d+_JZ\d+#[F|B]\d+$/
    return reg.test(floorId)
  }

  getBuildingIdFromGid(gid) {
    if (this.isBuildingId(gid)) {
      return gid
    }

    if (!this.isBuildingWK(gid)) {
      return ''
    }

    const buildingIdArr = gid.split('_')
    if (buildingIdArr.length === 3) {
      buildingIdArr.pop()
    }

    return buildingIdArr.join('_')
  }

  /**
   * F001 => 1
   * F002 => 2
   * B001 => -1
   * B002 => 02
   * @param floorName
   * @returns {number|undefined}
   */
  getFloorNumberFromFloorName(floorName) {
    if (!this.isValidFloorName(floorName)) {
      return
    }

    const floorSignString = floorName[0]
    let floorSign = 1
    if (floorSignString === 'B') {
      floorSign = -1
    }

    return Number(floorName.slice(1)) * floorSign
  }

  getFloorNameFromFloorId(floorId) {
    if (!this.isFloorId(floorId)) {
      return
    }

    return floorId.split('#')[1]
  }

  isValidBuildingId(id) {
    if (!this.isBuildingId(id)) {
      console.error(`建筑 id: ${id}, 不符合格式：V001_JZ0001`)
      return false
    }

    return true
  }

  isValidBuildingWkId(id) {
    if (!this.isBuildingWK(id)) {
      console.error(`建筑外壳 id: ${id}, 不符合格式：V001_JZ0001_WK`)
      return false
    }
    return true
  }

  isValidFloorName(floorName) {
    if (!this.isFloorName(floorName)) {
      console.error(`楼层名称: ${floorName}, 不符合格式：B001 | F001.`)
      return false
    }

    return true
  }


  createFloorGid(buildId, floorName) {
    let floorGid = ''

    if (this.isValidBuildingId(buildId)) {
      floorGid = buildId + '_WK_' + floorName
    } else if (this.isValidBuildingWkId(buildId)) {
      floorGid = buildId + '_' + floorName
    }

    return floorGid
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
    if (this.view3d && functionExist(this.view3d, this.view3d.GetBuildingNum)) {
      return schedule(this.view3d, this.view3d.GetBuildingNum)
    }
  }

  /**
   * 获取建筑物名称列表
   * @returns {Promise<Array<{id: String, name: String, visible: Boolean}>>}
   */
  getBuildingNames() {
    if (this.view3d && functionExist(this.view3d, this.view3d.GetBuildingNames)) {
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
    if (this.view3d && functionExist(this.view3d, this.view3d.GetSplitBuildingNames)) {
      return schedule(this.view3d, this.view3d.GetSplitBuildingNames)
    }
  }

  /**
   * 获取建筑物是否显示
   * @param id
   * @return {Promise<{name: String, visible: Boolean}> | undefined}
   */
  getBuildingVisible(id) {
    if (!this.build.utils.isValidBuildingId(id)) {
      return
    }

    if (this.view3d && functionExist(this.view3d, this.view3d.GetBuildingVisible)) {
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
    if (!this.build.utils.isValidBuildingId(id)) {
      return
    }

    if (this.view3d && functionExist(this.view3d, this.view3d.SetBuildingVisible)) {
      return waitSchedule(wait, this.view3d, this.view3d.SetBuildingVisible, id, visible)
    }
  }

  /**
   * 设置建筑物外壳的显示和隐藏
   * @BUG 有 bug，第一次显示的状态下，调隐藏外壳，无效。第一次掉显示外壳反而隐藏了外壳，后续的调用彻底无效不管显示还是隐藏
   * @param id
   * @param visible
   * @param wait
   * @returns {*}
   */
  setBuildingWkVisible(id, visible, wait = 20) {
    if (!this.build.utils.isValidBuildingId(id)) {
      return
    }

    if (this.view3d && functionExist(this.view3d, this.view3d.SetBuildingWkVisible)) {
      return waitSchedule(wait, this.view3d, this.view3d.SetBuildingWkVisible, id, visible)
    }
  }

  /**
   * 楼层分离
   */
  splitBuilding(id, height, wait = 20) {
    if (!this.build.utils.isValidBuildingId(id)) {
      return
    }

    if (this.view3d && functionExist(this.view3d, this.view3d.SplitBuilding)) {
      return waitSchedule(wait, this.view3d, this.view3d.SplitBuilding, id, height)
    }
  }

  /**
   * 楼层复原 - 单个建筑
   */
  splitBuildingReset(id, wait = 20) {
    if (!this.build.utils.isValidBuildingId(id)) {
      return
    }

    if (this.view3d && functionExist(this.view3d, this.view3d.SplitBuildingReset)) {
      return waitSchedule(wait, this.view3d, this.view3d.SplitBuildingReset, id)
    }
  }

  /**
   * 楼层动态分离
   */
  splitDynamicBuilding(id, height, duration, callback) {
    if (!this.build.utils.isValidBuildingId(id)) {
      return
    }

    if (!this.core || !this.view3d) {
      return
    }

    const self = this
    this.core.showCover()
    // @bug: 实际的高度 = 设置的高度 * 2
    this.view3d.SplitDynamicBuilding(id, height, duration)
    setTimeout(() => {
      self.core.hideCover()
      callback && callback()
    }, (duration + 0.3) * 1000)
  }

  /**
   * 楼层动态侧平移
   * @param buildId
   * @param floorName
   * @param height
   * @param duration
   * @param callback
   * @TODO: 传参优化
   */
  splitDynamicFloor(buildId, floorName, height, duration, callback) {
    if (!this.build.utils.isValidBuildingId(buildId)) {
      return
    }

    if (!this.core || !this.view3d) {
      return
    }

    this.core.showCover()
    // TODO: 如果改用 updateObjects 来动态移动楼体，需要知道要终点的坐标(上下移动+z，左右移动，需要整体计算终点的x,y)
    this.view3d.SplitDynamicFloor(buildId, floorName, height, duration)
    setTimeout(() => {
      this.core.hideCover()
      callback && callback()
    }, (duration + 0.3) * 1000)
  }

  /**
   * 重置所有建筑的状态
   * @param wait {Number}
   * @returns {Promise<any>}
   */
  resetAllBuildings(wait = 20) {
    if (this.view3d && functionExist(this.view3d, this.view3d.ResetAllBuildings)) {
      return waitSchedule(wait, this.view3d, this.view3d.ResetAllBuildings)
    }
  }

  // 楼层相关
  /**
   * 获取楼层个数
   * @param buildId
   * @returns {*}
   */
  getFloorNum(buildId) {
    if (!this.build.utils.isValidBuildingId(buildId)) {
      return
    }
    if (this.view3d && functionExist(this.view3d, this.view3d.GetFloorNum)) {
      return schedule(this.view3d, this.view3d.GetFloorNum, buildId)
    }
  }

  /**
   * 获取楼层名称列表
   * @param buildId
   * @returns {*}
   */
  getFloorNames(buildId) {
    if (!this.build.utils.isValidBuildingId(buildId)) {
      return
    }
    if (this.view3d && functionExist(this.view3d, this.view3d.GetFloorNames)) {
      return schedule(this.view3d, this.view3d.GetFloorNames, buildId)
    }
  }

  /**
   * 获取楼层是否显示
   * @param buildId
   * @param floorName
   * @returns {*}
   */
  getFloorVisible(buildId, floorName) {
    if (!this.build.utils.isValidBuildingId(buildId)) {
      return
    }

    if (!this.build.utils.isValidFloorName(floorName)) {
      return
    }

    if (this.view3d && functionExist(this.view3d, this.view3d.GetFloorVisible)) {
      return schedule(this.view3d, this.view3d.GetFloorVisible, buildId, floorName)
    }
  }

  setFloorVisible(buildId, floorName, visible, wait = 20) {
    if (!this.build.utils.isValidBuildingId(buildId)) {
      return
    }

    if (!this.build.utils.isValidFloorName(floorName)) {
      return
    }

    if (this.view3d && functionExist(this.view3d, this.view3d.SetFloorVisible)) {
      return waitSchedule(wait, this.view3d, this.view3d.SetFloorVisible, buildId, floorName, visible)
    }
  }

  getUpFloorNum(buildId, floorName) {
    if (!this.build.utils.isValidBuildingId(buildId)) {
      return
    }

    if (!this.build.utils.isValidFloorName(floorName)) {
      return
    }
    if (this.view3d && functionExist(this.view3d, this.view3d.GetUpFloorNum)) {
      return schedule(this.view3d, this.view3d.GetUpFloorNum, buildId, floorName)
    }
  }


  getDownFloorNum(buildId, floorName) {
    if (!this.build.utils.isValidBuildingId(buildId)) {
      return
    }

    if (!this.build.utils.isValidFloorName(floorName)) {
      return
    }
    if (this.view3d && functionExist(this.view3d, this.view3d.GetDownFloorNum)) {
      return schedule(this.view3d, this.view3d.GetDownFloorNum, buildId, floorName)
    }
  }

  getUpFloorNames(buildId, floorName) {
    if (!this.build.utils.isValidBuildingId(buildId)) {
      return
    }

    if (!this.build.utils.isValidFloorName(floorName)) {
      return
    }
    if (this.view3d && functionExist(this.view3d, this.view3d.GetUpFloorNames)) {
      return schedule(this.view3d, this.view3d.GetUpFloorNames, buildId, floorName)
    }
  }

  getDownFloorNames(buildId, floorName) {
    if (!this.build.utils.isValidBuildingId(buildId)) {
      return
    }

    if (!this.build.utils.isValidFloorName(floorName)) {
      return
    }

    if (this.view3d && functionExist(this.view3d, this.view3d.GetDownFloorNames)) {
      return schedule(this.view3d, this.view3d.GetDownFloorNames, buildId, floorName)
    }
  }

  // 地面的显示和隐藏
  setGroundVisible(visible = true, wait = 10) {
    if (this.view3d && functionExist(this.view3d, this.view3d.SetGroundVisible)) {
      return waitSchedule(wait, this.view3d, this.view3d.SetGroundVisible, visible)
    }
  }
}

/**
 * 楼栋相关操作
 */
class MapBuild extends MapBuildingBase {
  constructor() {
    super()

    // 地面默认是显示的
    this.groundVisible = true

    // 功能函数类实例
    this.utils = new MapBuildingUtils(this)

    // 底层接口实例
    this.api = new MapBuildingApi(this)

    this.buildingInfo = null

    // TODO: 增加每栋楼分层的状态 - 是否在分离中，是否分离结束
  }

  init(mapViewer) {
    super.init(mapViewer)

    this.api.init(mapViewer)

    // 初始楼栋楼层信息
    this.initBuildingInfo()
  }


  // 获取一遍所有的楼层实体信息，会包含：楼层边界点位：bmax,bmin
  // 因为这是不紧急的任务，所以，不应该阻塞页面
  initBuildingInfo() {
    if (this.buildingInfo) {
      return this.buildingInfo
    }

    this.buildingInfo = {}

    const self = this
    this.api.getBuildingNames().then(buildings => {
      if (Array.isArray(buildings)) {
        buildings.forEach(build => {
          // 获取楼栋详情信息
          self.setBuildingInfo(build)

          // 获取楼栋内楼层的信息
          self.setFloorInfo(build.id)
        })
      }
    })
  }

  /**
   * 获取单个建筑的实体信息
   */
  getBuildingInfo(buildId) {
    if (!this.buildingInfo) {
      return null
    }

    if (buildId !== undefined) {
      return this.buildingInfo[buildId]
    }

    return this.buildingInfo
  }

  /**
   * 设置单个楼栋的信息
   */
  setBuildingInfo(build) {
    if (!this.buildingInfo) {
      this.buildingInfo = {}
    }

    const self = this

    this.buildingInfo[build.id] = {
      ...build,
      floor: []
    }

    // 获取对应的楼栋的详情
    if (this.mapViewer) {
      this.mapViewer.drawer.findObjectById(build.id).then(res => {
        self.buildingInfo[build.id] = {
          ...build,
          details: res
        }
      })
    }
  }

  // 获取某栋楼内的所有楼层信息 - 名称列表
  getFloorInfo(buildId) {
    if (!this.utils.isBuildingId(buildId)) {
      return
    }

    if (!this.buildingInfo) {
      return
    }

    return this.buildingInfo[buildId]
  }

  setFloorInfo(buildId) {
    const self = this

    // 如果没有获取过，获取一次
    this.api.getFloorNames(buildId).then(floors => {
      if (Array.isArray(floors)) {
        self.buildingInfo[buildId].floorNum = floors.length
        self.buildingInfo[buildId].floor = floors

        floors.forEach((floor, i) => {
          self.setFloorDetail(buildId, floor.floorname, i)
        })
      }
    })
  }

  /**
   * 获取楼层详情信息
   * @param buildId
   * @param floorName
   */
  getFloorDetail(buildId, floorName) {
    if (!this.utils.isBuildingId(buildId)) {
      return
    }

    // TODO: 验证 floorName
    let floorInfo = null

    const buildInfo = this.getBuildingInfo(buildId)
    if (buildInfo && buildInfo.floor) {
      for (let i = 0; i < buildInfo.floor.length; i++) {
        const floor = buildInfo.floor
        if (floor.floorname === floorName) {
          floorInfo = floor
          break
        }
      }
    }

    if (!floorInfo) {
      console.warn(`无法找到给定的楼层信息。楼栋 id: ${buildId}, 楼层id: ${floorName} . `)
      return null
    }
    return floorInfo
  }

  /**
   * 设置楼层详情信息
   * @param buildId
   * @param floorName
   * @param index
   */
  setFloorDetail(buildId, floorName, index) {
    if (!this.utils.isBuildingId(buildId)) {
      return
    }
    const floorGid = this.utils.createFloorGid(buildId, floorName)
    if (floorGid) {
      this.api.setFloorVisible(buildId, floorName, true).then(() => {
        this.mapViewer.drawer.findObjectById(floorGid).then(res => {
          const buildInfo = this.getBuildingInfo(buildId)
          if (buildInfo && Array.isArray(buildInfo.floor)) {
            const floorInfo = buildInfo.floor[index]
            if (floorInfo) {
              floorInfo.details = res
            }
          }
        })
      })
    }
  }

  /**
   * 楼层显示和隐藏 - 无动态效果
   * @param buildId
   * @param floorName
   * @param visible
   */
  setFloorVisible(buildId, floorName, visible) {
    if (!this.utils.isValidBuildingId(buildId)) {
      return
    }

    if (!this.utils.isValidFloorName(floorName)) {
      return
    }

    const floorSign = floorName[0]

    if (floorSign === 'B') {
      // 隐藏地面
      if (this.groundVisible) {
        this.groundVisible = !this.groundVisible
        this.api.setGroundVisible(this.groundVisible)
      }
    } else {
      // 显示地面
      if (!this.groundVisible) {
        this.groundVisible = !this.groundVisible
        this.api.setGroundVisible(this.groundVisible)
      }
    }

    const buildInfo = this.getBuildingInfo(buildId)
    const floorNumber = this.utils.getFloorNumberFromFloorName(floorName)

    if (buildInfo && Array.isArray(buildInfo.floor)) {

      for (let floor of buildInfo.floor) {
        let floorVisible = false

        const currentFloorName = floor.floorname

        const currentFloorNumber = this.utils.getFloorNumberFromFloorName(currentFloorName)

        floorVisible = currentFloorNumber <= floorNumber

        this.api.setFloorVisible(buildId, currentFloorName, floorVisible)
      }
    }
  }
}

export default new MapBuild()
