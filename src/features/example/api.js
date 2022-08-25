/**
 * @Author: yangqixin
 * @TIME: 2022/5/26 08:56
 * @FILE: api.js
 * @Email: 958292256@qq.com
 * @Description:
 */

import { urls } from '../../api'

/**
 * create example call config for axios.
 * @param data data needed.
 * @returns {{method: string, data, url: EntityState<any>}}
 */
export function fetchExampleData(data) {
  return {
    url: urls.exampleData,
    method: 'post',
    data
  }
}
