/**
 * @Author: yangqixin
 * @TIME: 2022/8/6 15:08
 * @FILE: index.js
 * @Email: 958292256@qq.com
 * @Description:
 */

import React, { useEffect, useState } from 'react'
import './index.scss'

const { createUUID, fetchConfig } = window.mapv3d.utils

let configFile = null
let mapViewer = null

export const getMapViewer = () => mapViewer

const getMapContainerId = () => {
  return `mapvision3d_${createUUID()}`
}

export const getConfigJson = () => {
  return configFile
}

const mapContainerId = getMapContainerId()

function MapContainer({
  onSuccess = () => null,
  defaultLocate = false,
  children,
  ...defaultProps
}) {
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!ready) {
      fetchConfig().then(config => {
        configFile = config
        mapViewer = new window.mapv3d.MapViewer({
          // id: 'mapvision3d',
          id: mapContainerId,
          defaultLocate,
          defaultSetResolution: true,
          // 先给 0.5，目前地图如果设置 4K 分辨率，(3840 * 1080)，会被拉伸
          resolutionScale: 1,
          ...config,
          ...defaultProps,
          complete() {
            setReady(true)
            if (process.env.NODE_ENV === 'development') {
              window.$map = mapViewer
            }
            onSuccess(mapViewer)
          },
        })
      })
    }
  }, [ready, defaultProps, onSuccess, defaultLocate])

  return (
    <>
      <div className="map-container">
        <div id={mapContainerId} className="map-instance" />
      </div>
      {
        ready && children
      }
    </>
  )
}

export default MapContainer
