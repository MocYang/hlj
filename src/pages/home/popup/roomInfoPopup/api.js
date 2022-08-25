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
<<<<<<< HEAD
    url: urls.dwcWeb.suspectInfo,
=======
    url: urls,
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
    method: 'POST',
    data
  }
}

// 房间环境信息
<<<<<<< HEAD
export function environmentInfoConfig(data) {
  return {
    url: urls.dwcWeb.environmentInfo,
=======
export function roomEnvironmentInfoConfig() {
  return {
    url: urls,
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
    method: 'POST',
    data
  }
}
