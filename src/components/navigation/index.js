import React, { useState, useEffect } from 'react';
import floorConfig, { buildId } from './floorConfig'
import { getMapViewer, getConfigJson } from '../MapContainer'
import Build from '../../utils/build'
import expand from './images/icon-open.png'
import icon from './images/icon-fold.png'
import './index.scss'
import useHomePosition from '../../hooks/useHomePosition'

function Navigation({ onChange }) {
  // 是否点击了分层，
  const [open, setOpen] = useState(false)
  const [activeFloorId, setActiveFloorId] = useState(-1)
  const { flyToHomePosition } = useHomePosition()

  useEffect(() => {
    const mapViewer = getMapViewer()

    if (mapViewer && Build.api) {
      // const
      if (open) {
        const configJson = getConfigJson()
        const splitHeight = configJson.splitHeight
        Build.api.splitDynamicBuilding(buildId, splitHeight, 1)
      } else {
        Build.api.splitBuildingReset(buildId)
        setActiveFloorId(null)
        onChange(null)

        // flyToHomePosition()
      }
    }
  }, [open])

  const handleToggleOpen = () => {
    setOpen(open => !open)
  }

  const handleFloorClick = (floor) => {
    const mapViewer = getMapViewer()

    setActiveFloorId(floor.id)

    // 统一在这里删除所有的模型，后续监控，和房间内图标就只负责上图
    mapViewer.drawer.remove.all()

    setTimeout(() => {
      // 设置楼层分层显示
      Build.setFloorVisible({
        buildId,
        floorName: floor.floorId
      })

      setTimeout(() => {
        mapViewer.camera.flyToPositionByOptions({
          position: floor.position,
          duration: 1,
          onFinish: () => {
            if (onChange) {

              onChange(floor)
            }
          }
        })
<<<<<<< HEAD
      }, 10)
    }, 10)
=======
      }, 100)
    }, 50)
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
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
