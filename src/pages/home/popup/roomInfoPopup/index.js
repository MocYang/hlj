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

  
  // 房间环境信息
  const environmentInfo = useSelector(selectEnvironmentInfo)

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
            console.log(res)
            setSuspectInfo(res.data)
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
    >
      <div className="popup__title">房间名称</div>
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
              <p>4758216</p>
              <p>63岁</p>
            </li>
            <li>
              <span>出生日期</span>
              <p>1959-02-07</p>
              <span>民族</span>
              <p>汉</p>
              <span>性别</span>
              <p>男</p>
            </li>
            <li>
              <span>审讯调查组名称</span>
              <p>黑龙江省监察纪委调查三组</p>
            </li>
            <li>
              <span>组长</span>
              <p>张书文</p>
              <span>安全员</span>
              <p>陈济东</p>
            </li>
            <li>
              <span>留置开始时间</span>
              <p>1979-02-07</p>
              <span>健康信息</span>
              <p>健康</p>
            </li>
            <li>
              <span>既往病史</span>
              <p>健康</p>
              <span>饮食禁忌</span>
              <p>忌荤腥</p>
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
            <li>
              <p>2021-08-21</p>
              <p>2021-08-21 09:30:45</p>
              <p>2021-08-21 12:30:45</p>
              <p>询问一室</p>
            </li>
            <li>
              <p>2021-08-21</p>
              <p>2021-08-21 09:30:45</p>
              <p>2021-08-21 12:30:45</p>
              <p>询问一室</p>
            </li>
            <li>
              <p>2021-08-21</p>
              <p>2021-08-21 09:30:45</p>
              <p>2021-08-21 12:30:45</p>
              <p>询问一室</p>
            </li>
            <li>
              <p>2021-08-21</p>
              <p>2021-08-21 09:30:45</p>
              <p>2021-08-21 12:30:45</p>
              <p>询问一室</p>
            </li>
            <li>
              <p>2021-08-21</p>
              <p>2021-08-21 09:30:45</p>
              <p>2021-08-21 12:30:45</p>
              <p>询问一室</p>
            </li>
            <li>
              <p>2021-08-21</p>
              <p>2021-08-21 09:30:45</p>
              <p>2021-08-21 12:30:45</p>
              <p>询问一室</p>
            </li>
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
                <span>32.8</span>
                <span>℃</span>
              </p>
            </div>
            <div className="popup__room-main-bottom">
              <p></p>
              <p>湿度</p>
              <p>
                <span>45.2</span>
                <span>%</span>
              </p>
            </div>
            <div className="popup__room-main-bottom">
              <p></p>
              <p>空气质量</p>
              <p>
                <span>3.28</span>
                <span>pm</span>
              </p>
            </div>
            <div className="popup__room-main-bottom">
              <p></p>
              <p>光照度</p>
              <p>
                <span>100</span>
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
