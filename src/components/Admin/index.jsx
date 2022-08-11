/**
 * @Author: yangqixin
 * @TIME: 2022/8/10 16:50
 * @FILE: index.js
 * @Email: 958292256@qq.com
 * @Description: 开发用的面板
 */
import { useRef } from 'react'

import { getMapViewer } from '../../pages/home'

import "./index.scss"

const buildId = "V001_JZ0001"

function Admin() {

  const clickCallbackRef = useRef(null)

  const handleAddClickHandler = () => {
    const mapViewer = getMapViewer()
    if (!clickCallbackRef.current) {
      clickCallbackRef.current = (res) => {
        console.log(res)
      }
      mapViewer.event.setMouseClickCallback("*", clickCallbackRef.current)
    }
  }

  const removeMouseClickCallback = () => {
    const mapViewer = getMapViewer()
    if (clickCallbackRef.current) {
      mapViewer.event.remove('*', clickCallbackRef.current)
      clickCallbackRef.current = null
    }
  }

  const handleGetCurrentPosition = () => {
    const mapViewer = getMapViewer()

    mapViewer.camera.getCurrentPosition().then(res => {
      console.log(res)
    })
  }

  const handleBuildingSplit = () => {
    const mapViewer = getMapViewer()
    mapViewer.core.view3d.SplitDynamicBuilding(buildId, 5, 2)
  }

  const handleFloorSplit = () => {
    const mapViewer = getMapViewer()
    mapViewer.core.view3d.SplitDynamicFloor(buildId, "F003", -80, 1)
  }

  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="app-admin-panel">
      <div className="panel--item" onClick={handleAddClickHandler}>添加点击事件</div>
      <div className="panel--item" onClick={removeMouseClickCallback}>移除点击事件</div>
      <div className="panel--item" onClick={handleGetCurrentPosition}>获取当前位置</div>
      <div className="panel--item" onClick={handleBuildingSplit}>建筑炸裂</div>
      <div className="panel--item" onClick={handleFloorSplit}>单个楼层分离</div>
      <div className="panel--item" onClick={handleFloorSplit}>添加楼层点击分离事件</div>
    </div>
  )
}

export default Admin
