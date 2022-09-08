/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/23 13:35
 * @File: index.js
 * @Description 机房信息弹窗
 */

import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PopupContainer from '../../../../components/popup/PopupContainer'
import {
  selectMachineInfo,
  selectMachinePopupVisible,
  setMachineInfo,
  setMachinePopUpVisible
} from './slice'
import './index.scss'

import useRequest from '../../../../hooks/useRequest'
import { machineInfoConfig } from './api'

const MachinePopup = () => {
  const dispatch = useDispatch()
  const isMachinePopupVisible = useSelector(selectMachinePopupVisible)

  const machineInfo = useSelector(selectMachineInfo)
  const room = useRef(null)
  const { run: fetchMachineInfo } = useRequest()

  const handleCloseMachinePopup = () => {}

  useEffect(() => {
    if (isMachinePopupVisible) {
      // 获取机房相关信息
      fetchMachineInfo(machineInfoConfig())
        .then((res) => {
          if (Number(res) === 0) {
            dispatch(setMachineInfo(res.data))
          }
          room.current = res.data
          console.log('1112111', room.current)
        })
        .catch((e) => console.error(e))
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
          <p>{(room.current && room.current.machinesCount) || ''}</p>
          <p>服务器总数</p>
        </div>
        <div>
          <p>{(room.current && room.current.healthScore) || ''}</p>
          <p>服务器健康指数</p>
        </div>
        <div>
          <p>{(room.current && room.current.serverRatio) || ''}%</p>
          <p>服务器在线率</p>
        </div>
        <div>
          <p>{(room.current && room.current.compentsCount) || ''}</p>
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
        {(room.current &&
          room.current.machineInfo &&
          room.current.machineInfo.map((item, index) => {
            return (
              <li key={index}>
                 <p>
                  <span>{item.machineName}</span>
                  <span>{item.machineName}</span>
                </p>
                <p>{item.memoryTotal}</p>
                <p>{item.memoryUsed}</p>
                <p>{item.memoryUseRetio}</p>
                <p>{item.cpuUsed}</p>
              </li>
            )
          })) ||
          ''}
        {/* <li>
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
        </li> */}
      </ul>
    </PopupContainer>
  )
}

export default MachinePopup