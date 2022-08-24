/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/6/30 19:32
 * @File: index.js
 * @Description 监听地图的缩放，如果高度达到给定值，执行操作(比如，显示和隐藏)
 */
import { useCallback, useEffect, useRef } from 'react'
import { getMapViewer } from '../../components/MapContainer'

let hasListenZoomHandler = false

let listenerMap = new Map()
const mapUtils = window.mapv3d.utils

const throttle = mapUtils.throttle
const createUUID = mapUtils.createUUID

const useZoom = ({ onChange, key = createUUID } = {}) => {
  const zoomTimer = useRef(null)
  const zoomHandlerRef = useRef(null)

  const getMapContainerId = () => {
    const mapViewer = getMapViewer()
    return mapViewer.core.config.id
  }

  const removeZoomListener = useCallback(() => {
    const $mapContainer = document.getElementById(getMapContainerId())
    $mapContainer && $mapContainer.removeEventListener('mousewheel', zoomHandlerRef.current)
  }, [])

  const subscribe = useCallback(() => {
    if (!listenerMap.get(key)) {
      listenerMap.set(key, onChange)
    }
  }, [])

  const unsubscribe = useCallback(() => {
    listenerMap.delete(key)
    if (zoomHandlerRef.current && hasListenZoomHandler) {
      removeZoomListener()
      hasListenZoomHandler = false
      zoomHandlerRef.current = null
    }
  }, [])


  useEffect(() => {
    return () => {
      unsubscribe()
    }
  }, [])

  // 全局监听地图容器上的滚轮缩放事件
  const init = useCallback(() =>{
    if (hasListenZoomHandler) {
      return
    }

    // 只监听一次事件即可
    hasListenZoomHandler = true

    const $mapContainer = document.getElementById(getMapContainerId())
    // 监听地图容器元素的缩放事件，去获取当前视角的高度
    zoomHandlerRef.current = throttle((e) => {
      if (zoomTimer.current) {
        clearTimeout(zoomTimer.current)
      }

      const mapViewer = getMapViewer()
      if (mapViewer) {
        mapViewer.core.view3d.GetCurrentPosition(p => {
          // 派发缩放事件
          listenerMap.forEach((handler) => {
            if (typeof handler === 'function') {
              handler({
                ...p,
                // 单位： 米
                z: p.z / 100
              })
            }
          })
        })
      }
    }, 300)

    $mapContainer.addEventListener('mousewheel', zoomHandlerRef.current)
  }, [])

  return {
    init,
    subscribe,
    unsubscribe
  }
}

export default useZoom
 
