/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/23 13:52
 * @File: api.js
 * @Description 留置人员和房间环境信息弹窗
 */
import { urls } from '../../../../api'

// 留置人员信息详情
export function suspectInfoConfig(data) {
  return {
    url: urls.dwcWeb.suspectInfo,
    method: 'POST',
    data
  }
}

// 房间环境信息
export function environmentInfoConfig(data) {
  return {
    url: urls.dwcWeb.environmentInfo,
    method: 'POST',
    data
  }
}
