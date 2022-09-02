/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/9/2 13:40
 * @File: RegionLabel.js
 * @Description 区域 label 显示在界面上的
 */

import { useState, useEffect, useCallback } from 'react'
import regionConfig from './config'
import './index.scss'
import { getMapViewer } from '../../components/MapContainer'

const RegionLabel = ({
  floor,
  regionEntity,
  setActiveFloors
}) => {
  const [labelVisible, setLabelVisible] = useState(false)

  const [labelList, setLabelList] = useState(() => {
    return Object.values(regionConfig).filter(region => region.label).map(region => ({
      ...region,
      visible: true
    }))
  })

  useEffect(() => {
    // 只在1楼显示的情况下,显示 label
    if (floor && floor.length > 0) {
      for (let f of floor) {
        if (f.floorId === 'F001') {
          setLabelVisible(f.active)
        }
      }
    }
  }, [floor])

  // 点击色块 - 做面的显示和隐藏
  const onLabelColorClick = useCallback((label) => {
    const mapViewer = getMapViewer()

    const entities = regionEntity[label.key]

    for (let entity of entities) {
      mapViewer.drawer.updateObjectVisible(entity.gid, !label.visible)
    }

    setLabelList(labelList => labelList.map(curLabel => ({
      ...curLabel,
      visible: label.key === curLabel.key ? !curLabel.visible : curLabel.visible
    })))
  }, [regionEntity, labelList])

  const onLabelNameClick = (label) => {
    const mapViewer = getMapViewer()
    if (label.center) {
      const flyToArea = () => {
        mapViewer.camera.flyToPositionByOptions({
          duration: 1,
          position: label.center,
          onFinish: () => {
            debugger
            onLabelColorClick(label)
          }
        })
      }
      // 有多个楼层显示时,把其他层隐藏掉
      const activeFloors = floor.filter(floor => floor.active)
      if (activeFloors.length > 1) {
        setActiveFloors(floor => floor.map(f => ({
          ...f,
          active: f.floorId === 'F001'
        })))

        setTimeout(() => {
          flyToArea()
        }, 500)
      } else {
        flyToArea()
      }
    }
  }

  return (
    <div className="label-group">
      {
        labelVisible && labelList.map((label, i) => (
          <div
            key={i}
            className={`label-item ${label.visible ? 'active' : ''}`}
          >
            <span
              className={`label-color`}
              style={{
                background: label.color
              }}
              onClick={() => onLabelColorClick(label)}
            />
            <span
              className={"label-name"}
              style={{
                color: label.color
              }}
              onClick={() => onLabelNameClick(label)}
            >{label.label}</span>
          </div>
        )) || null
      }
    </div>
  )
}

export default RegionLabel
