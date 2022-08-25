/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/2/9 14:56
 * @File: http.js
 * @description 1
 */
import { useEffect, useState, useCallback } from 'react'
import HttpFactory from '../../api/request'

function useRequest(initService, config = { manual: true }) {
  const [loading, setLoading] = useState(false)
  const [httpInstance, setHttpInstance] = useState(HttpFactory())
  const { http, cancel } = httpInstance
  const runCancel = useCallback(() => {
    // 执行完本次 cancel 后，需要重新生成 http 实例，以供下次调用
    setHttpInstance(HttpFactory())
    setLoading(false)

    cancel()
  }, [cancel])

  const run = useCallback(
    (service) => {
      return new Promise((resolve, reject) => {
        setLoading(true)
        http(service)
          .then((res) => {
            setLoading(false)

            resolve(res)
          })
          .catch((e) => {
            setLoading(false)

            reject(e)
          })
      })
    },
    [http]
  )

  useEffect(() => {
    if (!config.manual) {
      run(initService)
        .then((res) => {
          if (config.onSuccess) {
            config.onSuccess(res)
          }
        })
        .catch((e) => {
          if (config.onError) {
            config.onError(e)
          }
        })
    }
  }, [run])

  return {
    run,
    cancel: runCancel,
    loading
  }
}

export default useRequest
