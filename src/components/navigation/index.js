import React, { useState, useEffect } from 'react';
import floorConfig, { buildId } from './floorConfig'
import { getMapViewer, getConfigJson } from '../MapContainer'
import Build from '../../utils/build'
import expand from './images/icon-open.png'
import icon from './images/icon-fold.png'
import './index.scss'

function Navigation({onChange}) {
  // 是否点击了分层，
  const [open, setOpen] = useState(false)
  const [activeFloorId, setActiveFloorId] = useState(-1)

  useEffect(() => {
    const mapViewer = getMapViewer()

    if (mapViewer && Build.api) {
      if (open) {
        const configJson = getConfigJson()
        const splitHeight = configJson.splitHeight
        Build.api.splitDynamicBuilding(buildId, splitHeight, 1)
      } else {
        Build.api.splitBuildingReset(buildId)
        setActiveFloorId(null)
        onChange(null)
      }
    }
  }, [open])

  const handleToggleOpen = () => {
    setOpen(open => !open)
  }

  const handleFloorClick = (floor) => {
    setActiveFloorId(floor.id)

    // 设置楼层分层显示
    Build.setFloorVisible(buildId, floor.floorId)

    if (onChange) {
      onChange(floor)
    }
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
