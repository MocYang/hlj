import React, { useState, useEffect } from 'react';
import floorConfig, { buildId } from './floorConfig'
import { getMapViewer } from '../MapContainer'
import Build from '../../utils/build'
import EventBus from '../../utils/EventBus'
import expand from './images/icon-open.png'
import icon from './images/icon-fold.png'
import './index.scss'

function Navigation() {
  // 是否点击了分层，
  const [open, setOpen] = useState(false)
  const [activeFloorId, setActiveFloorId] = useState(-1)

  useEffect(() => {
    const mapViewer = getMapViewer()

    if (mapViewer) {
      if (open) {
        Build.splitDynamicBuilding(buildId, 10, 1)
      } else {
        Build.splitBuildingReset(buildId)
      }
    }
  }, [open])

  const handleToggleOpen = () => {
    setOpen(open => !open)
  }

  const handleFloorClick = (floor) => {
    setActiveFloorId(floor.id)
    const mapViewer = getMapViewer()
    // mapViewer.core.view3d.FindObjectById('V001_JZ0001', res => {
    //   const buildInfo = res
      // Build.splitDynamicFloor(buildId, floor.floorId, 10, 2, () => {
      //   console.log('floor split')
      // })

    // })

    EventBus.dispatch('floorSplit', {
      buildId,
      floorId: floor.floodId
    })
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
            floorConfig.map(floor => (
              <div
                key={floor.id}
                className={`f1 floor-item ${floor.id === activeFloorId ? 'active' : ''}`}
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
