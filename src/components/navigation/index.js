import React, { useState, useEffect, useRef } from 'react';
import floorConfig, { buildId } from './floorConfig'
import { getMapViewer, getConfigJson } from '../MapContainer'
import Build from '../../utils/build'
import expand from './images/icon-open.png'
import icon from './images/icon-fold.png'
import './index.scss'
import useHomePosition from '../../hooks/useHomePosition'
import { handleGetSplitEntitiesHeight } from '../../utils'

function Navigation({ onChange }) {
  // 是否点击了分层，
  const [open, setOpen] = useState(false)
  const openCachedRef = useRef(open)
  // const [activeFloorId, setActiveFloorId] = useState(-1)
  const { flyToHomePosition } = useHomePosition()

  const [activeFloors, setActiveFloors] = useState(floorConfig.map(floor => ({
    ...floor,
    active: false
  })))

  useEffect(() => {
    const mapViewer = getMapViewer()

    if (mapViewer && Build.api) {
      if (open) {
        const configJson = getConfigJson()
        const splitHeight = configJson.splitHeight
        Build.api.splitDynamicBuilding(buildId, splitHeight, 1)
      } else if (openCachedRef.current && !open) {

        Build.api.splitBuildingReset(buildId)

        Build.api.setBuildingVisible(buildId, true)

        // setActiveFloorId(null)

        //如果分层过,这里如果再点分层,
        mapViewer.drawer.remove.all()

        flyToHomePosition()

        setActiveFloors(floors => floors.map(floor => ({
          ...floor,
          active: false
        })))

        onChange(null)
      }
      openCachedRef.current = open
    }
  }, [open])

  const handleToggleOpen = () => {
    setOpen(open => !open)
  }

  const handleFloorClick = (currentFloor) => {
    const mapViewer = getMapViewer()

    // setActiveFloorId(currentFloor.id)

    // 缓存上一次显示的楼层，
    const prevActiveFloors = activeFloors.filter(floor => floor.active)

    let currentFloorActive = currentFloor.active

    const currentActiveFloors = activeFloors.map(floor => {
      let active = floor.active

      // 如果之前只有一个楼层，本次不让这个楼层隐藏
      if (prevActiveFloors.length === 1 && prevActiveFloors[0].floorId === floor.floorId) {
        return floor
      }

      if (floor.floorId === currentFloor.floorId) {
        active = !active
        currentFloorActive = active
      }

      return {
        ...floor,
        active
      }
    })

    setActiveFloors(currentActiveFloors)

    // 统一在这里删除所有的模型，后续监控，和房间内图标就只负责上图
    // TODO: 不需要每次都移除所有，因为会造成模型闪烁
    mapViewer.drawer.remove.all()

    setTimeout(() => {

      // 设置楼层分层显示
      Build.setFloorVisible({
        buildId,
        floorName: currentActiveFloors.filter(floor => floor.active).map(floor => floor.floorId),
        multiple: true
      })

      setTimeout(() => {
        onChange(currentActiveFloors)
      }, 150)

      // if (currentFloorActive) {
      // 只在显示时，做楼层定位
      // setTimeout(() => {
      //   const floorNumber = Build.utils.getFloorNumberFromFloorName(currentFloor.floorId)
      //   mapViewer.camera.flyToPositionByOptions({
      //     // position: currentFloor.position,
      //     position: handleGetSplitEntitiesHeight({
      //       ...currentFloor.position,
      //       x: currentFloor.position.x + 1000
      //     }, floorNumber),
      //     duration: 1,
      //     onFinish: () => {
      //       if (onChange) {
      //         // onChange(currentFloor)
      //         onChange(currentActiveFloors)
      //       }
      //     }
      //   })
      // }, 10)
      // }

    }, 10)

  }

  return (
    <div className="navigation">
      <div className="fenceng" onClick={handleToggleOpen}>
        <p className="text">分层</p>
        {
          open
            ? (<img className="icon shouqi" src={icon} alt="" />)
            : (<img className="icon expand" src={expand} alt="" />)
        }
      </div>

      {/* 定义一个空容器*/}
      <div className="floor-list-wrapper">
        <div className={`floor-list ${open ? 'active' : ''}`}>
          {
            activeFloors.map(floor => (
              <div
                key={floor.id}
                className={`f1 floor-item ${floor.active ? 'active' : ''}`}
                onClick={() => handleFloorClick(floor)}
              >
                <p className="text-f1">{floor.displayName}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}


export default Navigation;
