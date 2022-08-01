/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/1/24 10:44
 * @File: index.jsx
 * @Description 这里集合各个API操作
 */
import { urlConfig as originUrlConfig } from './config'

export let urls = Object.create({})

function precessPostSlash(url) {
  if (!url) {
    return url
  }
  if (url.endsWith('/')) {
    return url.slice(0, url.length - 2)
  }
  return url
}

function precessPreSlash(url) {
  if (!url) {
    return ''
  }

  if (!url.startsWith('/')) {
    url = '/' + url
  }
  return url
}

/**
 * 初始化一下接口地址
 * @param url{String} config.json文件中的接口地址
 */
export function initUrlConfig(url = '') {
  for (let [k, v] of Object.entries(originUrlConfig)) {
    urls[k] = precessPostSlash(url) + precessPreSlash(v)
  }
}

/**
 * 数据图层列表数据
 *
 */
export function mapLayerList() {
  return {
    url: urls.mapLayerList,
    method: 'GET',
    data: null
  }
}

/**
 * 数据图层列表树形数据
 *
 */
export function mapLayerTree() {
  return {
    url: urls.mapLayerTree,
    method: 'GET',
    data: null
  }
}
