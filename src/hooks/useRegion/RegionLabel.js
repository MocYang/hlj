/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/9/2 13:40
 * @File: RegionLabel.js
 * @Description 区域 label 显示在界面上的
 */

import { useState } from 'react'
import regionConfig from './config'
import './index.scss'

const RegionLabel = () => {
  const [labelList] = useState(() => {
    return Object.values(regionConfig)
      .filter(region => region.label)
      .map(region => ({
        label: region.label,
        color: region.color
      }))
  })
  return (
    <div className="label-group">
      {
        labelList.map((label, i) => (
          <div
            key={i}
            className="label-item"
          >
            <span
              className="label-color"
              style={{
                background: label.color
              }}
            />
            <span
              className={"label-name"}
              style={{
                color: label.color
              }}
            >{label.label}</span>
          </div>
        ))
      }
    </div>
  )
}

export default RegionLabel
