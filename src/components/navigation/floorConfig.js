/**
 * @Author: yangqixin
 * @TIME: 2022/8/11 14:34
 * @FILE: floorConfig.js
 * @Email: 958292256@qq.com
 * @Description:
 */
export const buildId = 'V001_JZ0001'

// 显示地下上，在地上的额外需要去隐藏的对象
export const undergroundObjects = [
  'Plane_2',
]

export default [
  {
    id: -1,
    buildId: buildId,
    floorId: 'B001',
    displayName: '地下',
  },
  {
    id: 1,
    buildId: buildId,
    floorId: 'F001',
    displayName: '一楼',
    position: {
      pitch: 43.65330123901367,
      roll: 0.0001095290353987366,
      x: -42204.7265625,
      y: -19786.80859375,
      yaw: -179.82852172851562,
      z: 4104.30615234375,
    }
  },
  {
    id: 2,
    buildId: buildId,
    floorId: 'F002',
    displayName: '二楼',
    position: {
      pitch: 43.65330123901367,
      roll: 0.0001095290353987366,
      x: -41841.87890625,
      y: -19611.564453125,
      yaw: -179.82852172851562,
      z: 5362.35546875
    }
  },
  {
    id: 3,
    buildId: buildId,
    floorId: 'F003',
    displayName: '三楼',
    position: {
      pitch: 43.65330123901367,
      roll: 0.0001095290353987366,
      x: -42571.375,
      y: -19776.40234375,
      yaw: -179.82852172851562,
      z: 6405.275390625,
    }
  },
  {
    id: 4,
    buildId: buildId,
    floorId: 'F004',
    displayName: '四楼',
    position: {
      pitch: 43.65330123901367,
      roll: 0.0001095290353987366,
      x: -42802.54296875,
      y: -19975.833984375,
      yaw: -179.82852172851562,
      z: 7620.18896484375
    }
  },
]

