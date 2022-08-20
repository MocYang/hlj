/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/17 12:20
 * @File: api.js
 * @Description
 */
import { urls } from '../../../../api'

// 云台控制接口
export function postVideoControlConfig(data) {
  return {
    url: urls.jwvisual.postVideoControl,
    method: 'POST',
    data
  }
}

// 根据房间设备编码，获取浏览url
export function previewUrlConfig(data) {
  return {
    url: urls.jwvisual.getPreviewUrl,
    method: 'POST',
    data
  }
}