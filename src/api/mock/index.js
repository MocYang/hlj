/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/3/26 16:33
 * @File: index.jsx
 * @Description
 */

// 生成指定数量的指定格式的列表数据
export const createData = (
  config = {
    schema: null,
    count: 0
  }
) => {
  let ret = []

  for (let i = 0; i < config.count; i++) {
    let entity = {}

    for (let [key, value] of Object.entries(config.schema)) {
      if (typeof value === 'function') {
        entity[key] = value()
      }
    }

    ret.push(entity)
  }

  return ret
}
