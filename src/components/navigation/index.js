import React, { useState } from 'react';
import './index.scss'
import icon from './images/icon-fold.png'
import expand from './images/icon-open.png'

function Navigation() {
  // 是否点击了分层，
  const [open, setOpen] = useState(false)

  const handleToggleOpen = () => {
    setOpen(open => !open)
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
          <div className="f1 floor-item">
            <p className="text-f1">F1</p>
          </div>
          <div className="f2 floor-item">
            <p className="text-f2">F2</p>
          </div>
          <div className="f3 floor-item">
            <p className="text-f3">F3</p>
          </div>
          <div className="f4 floor-item">
            <p className="text-f4">F4</p>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Navigation;
