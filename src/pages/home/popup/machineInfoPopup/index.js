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
      <h2>机房信息</h2>
    </PopupContainer>
  )
}

export default MachinePopup