/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/23 13:33
 * @File: index.js
 * @Description 留置人员详情弹窗
 */
import { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import PopupContainer from '../../../../components/popup/PopupContainer'
import {
  selectEnvironmentInfo,
  selectRoomInfo,
  selectRoomPopupVisible,
  selectSuspectInfo,
  setRoomPopUpVisible,
  setSuspectInfo
} from './slice'
import './index.scss'
import useRequest from '../../../../hooks/useRequest'
import { environmentInfoConfig, suspectInfoConfig } from './api'

const SuspectInfoPopup = () => {
  const isRoomPopupVisible = useSelector(selectRoomPopupVisible)

  const roomInfo = useSelector(selectRoomInfo)

  // 留置人员详情
  const suspectInfo = useSelector(selectSuspectInfo)
  const room = useRef(null)
  // 房间环境信息
  const environmentInfo = useSelector(selectEnvironmentInfo)
  const evnt = useRef(null)
  const { run: fetchSuspectInfo } = useRequest()

  const { run: fetchEnvironmentInfo } = useRequest()

  useEffect(() => {
    if (isRoomPopupVisible && roomInfo) {
      const roomIndexCode = roomInfo.roomIndexCode
      // 请求人员、环境信息
      fetchSuspectInfo(
        suspectInfoConfig({
          roomIndexCode
        })
      )
        .then((res) => {
          if (Number(res.code) === 0) {
            setSuspectInfo(res.data)
            // console.log('11111', res.data)
            room.current = res.data
          }
        })
        .catch((e) => console.error(e))
      fetchEnvironmentInfo(
        environmentInfoConfig({
          roomIndexCode
        })
      )
        .then((res) => {
          if (Number(res.code) === 0) {
            console.log('2222', res.data)
            evnt.current = res.data
            setSuspectInfo(res.data)
          }
        })
        .catch((e) => console.error(e))
    }
  }, [isRoomPopupVisible, roomInfo])

  return (
    <PopupContainer
      className="popup__suspect-info"
      show={isRoomPopupVisible}
      action={setRoomPopUpVisible}
      s
    >
      <div className="popup__title">
        {(room.current && room.current.roomName) || ''}
      </div>
      <div className="popup__main">
        <div className="popup__personnel" id="personnel">
          <div className="popup__title-border">
            <a href="#personnel">被留置人员</a>
            <a href="#room">房间环境</a>
          </div>
          <ul className="popup__personnel-info">
            <li>
              <p>
                <img src={require('./images/icon_people.png')} />
              </p>
              <p>{(room.current && room.current.suspectName) || ''}</p>
              <p>{(room.current && room.current.age) || ''}岁</p>
            </li>
            <li>
              <span>出生日期</span>
              <p>{(room.current && room.current.birthDay) || ''}</p>
              <span>民族</span>
              <p>{(room.current && room.current.nation) || ''}</p>
              <span>性别</span>
              <p>{(room.current && room.current.gender) || ''}</p>
            </li>
            <li>
              <span>审讯调查组名称</span>
              <p>{(room.current && room.current.groupName) || ''}</p>
              <span>留置开始时间</span>
              <p>{(room.current && room.current.beginTime) || ''}</p>
            </li>
            <li>
              <span>组长</span>
              <p>{(room.current && room.current.headman) || ''}</p>
              <span>安全员</span>
              <p>{(room.current && room.current.safeties) || ''}</p>
            </li>
            <li>
              <span>既往病史</span>
              <p>
                {(room.current && room.current.healthInfo.medicineHistory) ||
                  ''}
              </p>
              <span>饮食禁忌</span>
              <p>
                {(room.current && room.current.healthInfo.foodTaboos) || ''}
              </p>
            </li>
          </ul>
          <div className="popup__title2">
            <p>讯问记录</p>
          </div>
          <div className="popup__title3">
            <p>讯问日期</p>
            <p>开始时间</p>
            <p>结束时间</p>
            <p>讯问室名称</p>
          </div>
          <ul className="popup__personnel-inquire">
            {(room.current &&
              room.current.interrogateInfo &&
              room.current.interrogateInfo.map((item, index) => {
                return (
                  <li key={index}>
                    <p>{item.interrogateDate}</p>
                    <p>{item.interrogateBeginTime}</p>
                    <p>{item.interrogateEndTime}</p>
                    <p>{item.interrogateRoomName}</p>
                  </li>
                )
              })) ||
              ''}

            {/* <li>
              <p>2021-08-21</p>
              <p>2021-08-21 09:30:45</p>
              <p>2021-08-21 12:30:45</p>
              <p>询问一室</p>
            </li> */}
          </ul>
        </div>
        <div className="popup__room" id="room">
          <div className="popup__title-border">
            <a href="#personnel">被留置人员</a>
            <a href="#room">房间环境</a>
          </div>
          <div className="popup__room-title">
            <p>房间环境信息</p>
          </div>
          <div className="popup__room-main">
            <div className="popup__room-main-bottom">
              <p></p>
              <p>温度</p>
              <p>
                <span>{(room.current && evnt.current.temperature) || '0'}</span>
                <span>℃</span>
              </p>
            </div>
            <div className="popup__room-main-bottom">
              <p></p>
              <p>湿度</p>
              <p>
                <span>{(room.current && evnt.current.humidity) || ''}</span>
                <span>%</span>
              </p>
            </div>
            <div className="popup__room-main-bottom">
              <p></p>
              <p>空气质量</p>
              <p>
                <span>{(room.current && evnt.current.cleanliness) || ''}</span>
                <span>pm</span>
              </p>
            </div>
            <div className="popup__room-main-bottom">
              <p></p>
              <p>光照度</p>
              <p>
                <span>{(room.current && evnt.current.brightness) || ''}</span>
                <span>Lx</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </PopupContainer>
  )
}

export default SuspectInfoPopup
