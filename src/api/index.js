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
 * @param urlConfig{Object} config.json文件中的接口地址
 */
export function initUrlConfig(urlConfig = '') {

  for (let [k, v] of Object.entries(originUrlConfig)) {
    if(typeof v === 'string') {
      urls[k] = precessPostSlash(urlConfig.api) + precessPreSlash(v)
    } else if (typeof v === 'object') {
      for (let [k2, v2] of Object.entries(v)) {
        if (!urls[k]) {
          urls[k] = {}
        }
        urls[k][k2] = precessPostSlash(urlConfig[k]['url']) + precessPreSlash(v2)
      }
    }
  }
}

export function cameraListConfig (data = null) {
  return {
    url: urls.cameraList,
    method: 'POST',
    data
  }
}

/**
 * 房间使用情况
 * @returns {{method: string, data, url: string}}
 */
export function allRoomUseStatusConfig() {
  return {
    url: urls.jwvisual.allRoomInfo,
    method: 'GET',
    params: null
  }
}

/**
 * 根据房间编码，获取留置对象详情
 * @param roomIndexCode
 * @returns {{method: string, data: {roomIndexCode}, url: string}}
 */
export function suspectInfoConfig(roomIndexCode){
  return {
    url: urls.dwcWeb.suspectInfo,
    method: 'POST',
    data: {
      roomIndexCode
    }
  }
}
