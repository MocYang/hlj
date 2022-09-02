import { getConfigJson } from '../components/MapContainer'

/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/19 15:10
 * @File: index.js
 * @Description
 */

// 计算楼层分层后的点位的高度
export const handleGetSplitEntitiesHeight = (position, floorNumber) => {
  const configFile = getConfigJson()
  return {
    ...position,
    // * 2是因为 底层接口设置的高度，为高度参数的 2 倍
    z: Number(position.z) + (floorNumber - 1) * configFile.splitHeight * 100 * 2
  }
}

export function createUUID () {
  return (Math.random() * 0xffffff).toString(16).split('.')[1]
}
