/**
 * @Author: yangqixin
 * @TIME: 2022/8/10 16:50
 * @FILE: index.js
 * @Email: 958292256@qq.com
 * @Description: 开发用的面板
 */
import { useEffect, useRef, useState } from 'react'

import { getMapViewer } from '../MapContainer'
import Build from '../../utils/build'
// import polygonEntity from './polygon'
import "./index.scss"

const defaultBuildId = "V001_JZ0001"

function Admin({ mapReady = false }) {
  const [buildId, setBuildId] = useState(defaultBuildId)
  const clickCallbackRef = useRef(null)
  const [material, setMaterial] = useState('SplineOrangeHighlight')

  const materialEntityRef = useRef(null)

  const handleMaterialChange = (e) => {
    let m = e.target.value
    setMaterial(m)
  }

  // useEffect(() => {
  //   const mapViewer = getMapViewer()
  //   if (mapViewer) {
  //     if (mapViewer.event) {
  //       mapViewer.event.onDrag(res => {
  //         console.log('onDrag trigger====')
  //       })
  //     }
  //   }
  // }, [])


  const handleDrawLine = () => {
    if (material) {
      const mapViewer = getMapViewer()
      if (materialEntityRef.current) {
        mapViewer.drawer.remove.one(materialEntityRef.current)
      }

      mapViewer.drawer.create.drawLine({
        drawPoints: true,
        pointsVisible: true,
        style: material,
        onFinish: function (entity) {
          materialEntityRef.current = entity
        }
      })
    }
  }

  const handleDrawPolygon = () => {
    if (material) {
      const mapViewer = getMapViewer()

      if (materialEntityRef.current) {
        // mapViewer.drawer.remove.one(materialEntityRef.current)
      }

      mapViewer.drawer.create.drawPolygon({
        drawPoints: true,
        pointsVisible: true,
        // style: 'red',
        // color: '#ff0000',
        // opacity: 0.1,
        style: material,
        onFinish: function (entity) {
          materialEntityRef.current = entity

          console.log(JSON.stringify(entity))
        }
      })
    }
  }

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

  const handleGetMousePosition = () => {
    const mapViewer = getMapViewer()

    mapViewer.event.setMousePositionCallback(p => {
      console.log(JSON.stringify(p))
    })
  }

  const handleAddImage = () => {
    const mapViewer = getMapViewer()
    mapViewer.event.setMousePositionCallback(position => {

      // const imageConfig = mapViewer.drawer.config.image({
      //   style: 'qiangji_icon',
      //   location: position
      // })
      // console.log(JSON.stringify(imageConfig))
      // mapViewer.drawer.overLayerCreateObject(imageConfig).then(res =>{
      //   console.log(res)
      // })
      mapViewer.drawer.create.image({
        style: 'qiangji_icon',
        // style: 'P_Marker',
        location: position
      }, true).then(res => {
        console.log(JSON.stringify(res))
      })
    })
  }

  const modelEntityRef = useRef(null)
  const handleAddModel = () => {
    const mapViewer = getMapViewer()
    mapViewer.event.setMousePositionCallback(position => {
      mapViewer.drawer.create.model({
        filename: 'qiangji',
        scale: 5,
        location: position
      }, true).then(res => {
        modelEntityRef.current = res
      })
    })
  }

  const handleUpdateModelPosition = () => {
    if (!modelEntityRef.current) {
      return
    }
    const mapViewer = getMapViewer()
    mapViewer.event.setMousePositionCallback(p => {
      modelEntityRef.current.location = p
      setTimeout(() => {
        mapViewer.drawer.updateObjects([modelEntityRef.current])
      }, 100)
    })
  }

  const handleAddPOI = () => {
    const mapViewer = getMapViewer()
    mapViewer.event.setMousePositionCallback(position => {
      mapViewer.drawer.create.imageLabel({
        screen: true,
        // iconStyle: 'men-10.png',
        iconStyle: 'qiangji.gif',
        location: position
      }, true)
    })
  }

  const [niagara, setNiagara] = useState('P_Marker')
  const [niagaraEntity, setNiagaraEntity] = useState(null)
  const handleAddNiagara = () => {
    // handleAddNiagara
    const mapViewer = getMapViewer()

    if (niagaraEntity) {
      // mapViewer.drawer.remove.one(niagaraEntity)
    }
    mapViewer.event.setMousePositionCallback(position => {
      // mapViewer.drawer.overLayerCreateObject({
      mapViewer.drawer.create.niagara({
        attr: {
          id: 12345,
          name: '测试',
          roomIndexCode: +(new Date()),
          device_code: null,
          device_name: undefined,
          floor_id: '',
          build_id: 0
        },
        type: 'niagara',
        scale: 1,
        // filename: 'P_Marker_1',
        filename: niagara,
        location: position
      }, true).then(res => {
        // setNiagaraEntity(res)
        console.log(res)
      })
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

  const getFloorRoomNum = () => {
    Build.api.getFloorRoomNum(buildId, "F001").then(res => {
      console.log(res)
    })
  }

  const getFloorRoomNames = () => {
    Build.api.getFloorRoomNames(buildId, 'F001').then(res => {
      console.log(res)
    })
  }

  const handleFloorClick = () => {
    const mapViewer = getMapViewer()
    mapViewer.event.onClick("floor_click", function (e) {
      console.log(e, 1111111111)
    }, {
      compare: (gid) => {
        return Build.utils.isBuildingWK(gid)
      }
    })
  }


  const getFloorRoomVisible = () => {

  }

  if (process.env.NODE_ENV === 'production') {
    return null
  }

  return (
    <div className="app-admin-panel">

      <div className="panel--item">
        <select value={material} onChange={handleMaterialChange}>
          <option value="opacity">opacity</option>
          <option value="opacity_0">opacity_0</option>
          <option value="Opacity_cheng">Opacity_cheng</option>
          <option value="Opacity_hong">Opacity_hong</option>
          <option value="Opacity_huang">Opacity_huang</option>
          <option value="Opacity_lan">Opacity_lan</option>
          <option value="Opacity_lv">Opacity_lv</option>
          <option value="Opacity_qing">Opacity_qing</option>

          <option value="SplineOrangeHighlight">红色高亮</option>
          <option value="SplineOrangeHighlight1">红色高亮闪烁</option>
          <option value="SWJZ_line">蓝色高亮</option>
          <option value="sim_arraw_Cyan">导航绿色箭头路线</option>
          <option value="sim_spot">导航蓝色点状路线</option>
          <option value="sim_arraw">高亮绿色导航路线</option>
          <option value="sim_dashed">高亮绿色箭头导航路线</option>
          <option value="sim_flash">多段高亮绿色导航路线</option>
          <option value="sim_scan">单段导航路线</option>
          <option value="SplineOrange">橘黄色</option>
          <option value="YellowMaterial">黄色</option>
          <option value="RedMaterial">红色</option>
          <option value="GreenMaterial">绿色</option>
          <option value="BlueMaterial">蓝色</option>
          <option value="OpacityMaterial">黄色半透材质</option>
          <option value="ZouL_line">黄色高亮</option>
          <option value="FJ_line">金黄色高亮</option>
          <option value="GD">绿色高亮</option>
          <option value="CRK_line">浅绿色高亮</option>

        </select>
      </div>
      <div className="panel--item" onClick={handleDrawLine}>绘制线</div>
      <div className="panel--item" onClick={handleDrawPolygon}>绘制面</div>

      <div className="panel--item" onClick={handleAddClickHandler}>添加点击事件</div>
      <div className="panel--item" onClick={removeMouseClickCallback}>移除点击事件</div>
      <div className="panel--item" onClick={handleGetCurrentPosition}>获取当前位置</div>
      <div className="panel--item" onClick={handleGetMousePosition}>获取鼠标点击的位置</div>
      <div className="panel--item" onClick={handleAddImage}>添加图片</div>
      <div className="panel--item" onClick={handleAddModel}>添加模型</div>
      <div className="panel--item" onClick={handleUpdateModelPosition}>更新位置</div>
      <div className="panel--item" onClick={handleAddPOI}>添加POI</div>
      <div className="panel--item" onClick={handleAddNiagara}>添加特殊粒子效果</div>

      <div className="panel--item">
        <select name="niagara" id="niagara" value={niagara} onChange={e => setNiagara(e.target.value)}>
          <option value="TB">TB</option>
          <option value="TB1">TB1</option>
          <option value="TB2">TB2</option>
          <option value="P_Marker">P_Maker</option>
          <option value="P_Marker_1">P_Maker_1</option>
          <option value="P_Marker_2">P_Maker_2</option>
          <option value="P_Marker_3">P_Maker_3</option>
          <option value="P_Marker_4">P_Maker_4</option>
          <option value="P_Marker_5">P_Maker_5</option>
          <option value="P_Marker_6">P_Maker_6</option>
          <option value="P_Marker_7">P_Maker_7</option>
          <option value="P_Marker_8">P_Maker_8</option>
          <option value="P_Marker_9">P_Maker_9</option>
          <option value="P_Marker_10">P_Maker_10</option>
          <option value="P_Marker_11">P_Maker_11</option>
          <option value="P_Marker_12">P_Maker_12</option>
        </select>
      </div>
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


      <div className="panel--item" onClick={getFloorRoomNum}>获取房间数量</div>
      <div className="panel--item" onClick={getFloorRoomNames}>获取房间名称</div>
      <div className="panel--item" onClick={getFloorRoomVisible}>获取房间是否显示</div>
      <div className="panel--item" onClick={getFloorRoomNames}>设置房间的可见性</div>
      <div className="panel--item" onClick={handleFloorClick}>楼层单击</div>


    </div>
  )
}

export default Admin
