/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/23 13:33
 * @File: index.js
 * @Description 留置人员详情弹窗
 */
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PopupContainer from '../../../../components/popup/PopupContainer'
import {
  selectEnvironmentInfo, selectRoomInfo,
  selectRoomPopupVisible,
  selectSuspectInfo,
  setRoomPopUpVisible
} from './slice'

import './index.scss'

const SuspectInfoPopup = () => {
  const isRoomPopupVisible = useSelector(selectRoomPopupVisible)
  const roomInfo = useSelector(selectRoomInfo)
  const suspectInfo = useSelector(selectSuspectInfo)
  const environmentInfo = useSelector(selectEnvironmentInfo)

  useEffect(() => {
    if (isRoomPopupVisible && roomInfo) {
      // TODO: 请求人员、环境信息
    }
  }, [isRoomPopupVisible, roomInfo])

  return (
    <PopupContainer
      className="popup__suspect-info"
      show={isRoomPopupVisible}
      action={setRoomPopUpVisible}
    >
      <h2>留置人员/房间环境信息弹窗</h2>
    </PopupContainer>
  )
}


export default SuspectInfoPopup

