/**
 * @Author: yangqixin
 * @TIME: 2021/9/18 16:24
 * @FILE: AnimateNumber.js
 * @Email: 958292256@qq.com
 * @Description: 从 0 递增到指定数值的动态效果
 */
import { useEffect, useState, useRef } from 'react'

function AnimateNumber({ from = 0, to = 0, ticker = 20, children, step = 1}) {
  const [current, setCurrent] = useState(Number(from))
  const currentRef = useRef(current)
  const timer = useRef(null)

  useEffect(() => {
    if (Number(to) !== 0) {
      step = Math.floor(to / 100) || step
      timer.current = setInterval(() => {
        // if ( currentRef.current >= Number(to)) {
        //   clearInterval(timer.current)
        //   return
        // }
        if ( currentRef.current >= Number(to) - step) {
          currentRef.current = to
          setCurrent(currentRef.current)
          clearInterval(timer.current)
          return
        }
        currentRef.current = currentRef.current + step
        setCurrent(currentRef.current)
      }, ticker)
    }
    return () => {
      clearInterval(timer.current)
    }
  }, [to])

  return children(current)
}

export default AnimateNumber
