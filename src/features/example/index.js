/**
 * @Author: yangqixin
 * @TIME: 2022/5/26 08:56
 * @FILE: index.js
 * @Email: 958292256@qq.com
 * @Description:
 */

import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRequest } from '@ty/shared'
import { selectData, selectExampleList } from './slice'
import { fetchExampleData } from './api'

const Example = () => {
  const dispatch = useDispatch()
  const exampleList = useSelector(selectExampleList)
  const exampleData = useSelector(selectData)
  // use exampleList, exampleData as normal

  const {
    // real async call
    run: fetchExampleAsync,

    // loading status for this async call
    loading: fetchExampleAsyncLoading,

    // cancel call if needed
    cancel: fetchExampleAsyncCancel
  } = useRequest()

  useEffect(() => {
    fetchExampleAsync(fetchExampleData).then(res => {
      if (res.code === 0) {
        // do something
      }
    }).catch(e => {
      // error handler
    })

    return () => {
      // cancel before component unmount
      fetchExampleAsyncCancel()
    }
  }, [])

  return (
    <div className="example">
      example feature component
    </div>
  )
}
export default Example
