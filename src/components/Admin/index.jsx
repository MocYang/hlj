/**
 * @Author: yangqixin
 * @TIME: 2022/8/10 16:50
 * @FILE: index.js
 * @Email: 958292256@qq.com
 * @Description: 开发用的面板
 */
import { useRef, useState } from 'react'

import mapContainer, { getMapViewer } from '../MapContainer'
import Build from '../../utils/build'
import "./index.scss"

const defaultBuildId = "V001_JZ0001"

function Admin() {
  const [buildId, setBuildId] = useState(defaultBuildId)
  const clickCallbackRef = useRef(null)

  const handleAddClickHandler = () => {
    const mapViewer = getMapViewer()
    if (!clickCallbackRef.current) {
      clickCallbackRef.current = (res) => {
        console.log(res)
      }
      mapViewer.event.onClick("*", clickCallbackRef.current)
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

  const handleAddImage = () => {
    const mapViewer = getMapViewer()
    mapViewer.event.setMousePositionCallback(position => {
      mapViewer.drawer.create.image({
        style: 'qiangji_icon',
        location: position
      }, true)
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

  const getBuildingInfo = () => {
    const mapViewer = getMapViewer()
    mapViewer.core.view3d.FindObjectById('V001_JZ0001', res => {
      console.log(res)
    })
  }

  const handlePickBuilding = () => {
    const mapViewer = getMapViewer()
    mapViewer.event.onClick('building', res => {
      setBuildId(Build.utils.getBuildingIdFromGid(res.gid))
    }, {
      compare: (gid) => Build.utils.isBuildingWK(gid)
    })
  }

  const resetAllBuildings = () => {
    Build.api.resetAllBuildings()
  }


  // 获取建筑物数量
  const getBuildingNum = () => {
    Build.api.getBuildingNum().then(res => {
      console.log(res)
    })
  }

  const getBuildingNames = () => {
    Build.api.getBuildingNames().then(res => {
      console.log(res)
    })
  }

  const getSplitBuildingNames = () => {
    Build.api.getSplitBuildingNames().then(res => {
      console.log(res)
    })
  }

  const getBuildingVisible = () => {
    Build.api.getBuildingVisible(buildId).then(res => {
      console.log(res)
    })
  }

  let buildingVisible = false
  const setBuildingVisible = () => {
    Build.api.setBuildingVisible(buildId, buildingVisible)
    buildingVisible = !buildingVisible
  }

  let buildingWkVisible = false
  const setBuildingWkVisible = () => {
    Build.api.setBuildingWkVisible(buildId, buildingWkVisible)
    buildingWkVisible = !buildingWkVisible
  }

  const splitBuildingReset = () => {
    Build.api.splitBuildingReset(buildId)
  }

  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="app-admin-panel">
      <div className="panel--item" onClick={handleAddClickHandler}>添加点击事件</div>
      <div className="panel--item" onClick={removeMouseClickCallback}>移除点击事件</div>
      <div className="panel--item" onClick={handleGetCurrentPosition}>获取当前位置</div>
      <div className="panel--item" onClick={handleAddImage}>添加图片</div>
      <div className="panel--item" onClick={handleGetCurrentPosition}>添加模型</div>
      {/*<div className="panel--item" onClick={handleBuildingSplit}>建筑炸裂</div>*/}
      {/*<div className="panel--item" onClick={handleFloorSplit}>单个楼层分离</div>*/}
      {/*<div className="panel--item" onClick={handleFloorSplit}>添加楼层点击分离事件</div>*/}
      {/*<div className="panel--item" onClick={getBuildingInfo}>获取建筑信息</div>*/}

      <div className="panel--item" onClick={handlePickBuilding}>选择建筑</div>
      <div className="panel--item" onClick={resetAllBuildings}>重置所有建筑的状态</div>

      <div className="panel--item" onClick={getBuildingNum}>获取建筑物数量</div>
      <div className="panel--item" onClick={getBuildingNames}>获取建筑物名称列表</div>
      <div className="panel--item" onClick={getSplitBuildingNames}>获取建筑物名称列表 - 有楼层</div>
      <div className="panel--item" onClick={getBuildingVisible}>获取建筑物是否显示</div>
      <div className="panel--item" onClick={setBuildingVisible}>设置建筑物的显示/隐藏</div>
      <div className="panel--item" onClick={setBuildingWkVisible}>设置建筑物的外壳显示/隐藏</div>
      <div className="panel--item" onClick={splitBuildingReset}>楼层复原 - 单个建筑</div>


    </div>
  )
}

export default Admin
