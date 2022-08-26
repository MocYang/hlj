/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/23 13:52
 * @File: api.js
 * @Description
 */
import { urls } from '../../../../api'

export function machineInfoConfig() {
  return {
    url: urls.dwcWeb.machineInfo,
    method: "POST",
    data: null
  }
}
