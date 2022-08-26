/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/23 13:35
 * @File: index.js
 * @Description 机房信息弹窗
 */

import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PopupContainer from '../../../../components/popup/PopupContainer'
import {
  selectMachineInfo,
  selectMachinePopupVisible,
  setMachinePopUpVisible
} from './slice'
import './index.scss'

const MachinePopup = () => {
  const isMachinePopupVisible = useSelector(selectMachinePopupVisible)

  const machineInfo = useSelector(selectMachineInfo)

  const handleCloseMachinePopup = () => {

  }


  useEffect(() => {
    if (isMachinePopupVisible) {
      // TODO: 根据房间编码去获取机房相关信息
    }
  }, [isMachinePopupVisible])

  return (
    <PopupContainer
      className="popup__machine"
      show={isMachinePopupVisible}
      action={setMachinePopUpVisible}
      onClose={handleCloseMachinePopup}
    >
      <div className="popup__machine-title">服务器信息名称</div>
      <div className="popup__machine-head">
        <div>
          <p>3</p>
          <p>服务器总数</p>
        </div>
        <div>
          <p>99</p>
          <p>服务器健康指数</p>
        </div>
        <div>
          <p>98%</p>
          <p>服务器在线率</p>
        </div>
        <div>
          <p>114</p>
          <p>组件运行数量</p>
        </div>
      </div>
      <div className="popup__machine-bck"></div>
      <div className="popup__machine-title2">
        <div>服务器名称</div>
        <div>服务器内存</div>
        <div>服务器内存使用量</div>
        <div>服务器内存使用率</div>
        <div>CPU使用率</div>
      </div>
      <div className="popup__machine-bck2"></div>
      <ul className="popup__machine-info">
        <li>
          <p>LD00012号服务器</p>
          <p>48TB</p>
          <p>98%</p>
          <p>70%</p>
          <p>70%</p>
        </li>
        <li>
          <p>LD00012号服务器</p>
          <p>48TB</p>
          <p>98%</p>
          <p>70%</p>
          <p>70%</p>
        </li>
        <li>
          <p>LD00012号服务器</p>
          <p>48TB</p>
          <p>98%</p>
          <p>70%</p>
          <p>70%</p>
        </li>
        <li>
          <p>LD00012号服务器</p>
          <p>48TB</p>
          <p>98%</p>
          <p>70%</p>
          <p>70%</p>
        </li>
        <li>
          <p>LD00012号服务器</p>
          <p>48TB</p>
          <p>98%</p>
          <p>70%</p>
          <p>70%</p>
        </li>
      </ul>
    </PopupContainer>
  )
}

export default MachinePopup