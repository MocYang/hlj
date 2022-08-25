/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/19 14:59
 * @File: index.js
 * @Description 房间的使用情况 - 包括房间模型变色，加载人物图标，监听房间点击事件，监听房间点击事件
 */

<<<<<<< HEAD
import { useCallback, useEffect, useRef, useState } from 'react'
=======
import { useCallback, useEffect, useState } from 'react'
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
import { allRoomUseStatusConfig } from '../../api'
import useRequest from '../useRequest'
import { getMapViewer } from '../../components/MapContainer'
import roomConfig from './roomConfig'
import Build from '../../utils/build'
import { useDispatch } from 'react-redux'
import { usePopupController } from '../../components/popup/PopupContainer'
import { setRoomInfo, setRoomPopUpVisible } from '../../pages/home/popup/roomInfoPopup/slice'
<<<<<<< HEAD
import useZoom from '../useZoom'
=======
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6

export const useRoomIconClick = () => {
  const dispatch = useDispatch()

  const popupController = usePopupController()

  const addPersonIconClick = useCallback(() => {
    const mapViewer = getMapViewer()
    mapViewer.event.onClick('PERSON', res => {
      popupController.activate(setRoomPopUpVisible)

      dispatch(setRoomInfo({
        roomIndexCode: res.attr.roomIndexCode
      }))
    })
  }, [])

  return {
    addPersonIconClick
  }
}

const useRoomStatus = ({ floor }) => {
<<<<<<< HEAD
  const [personIconEntities, setPersonIconEntities] = useState([])

  const personIconEntitiesRef = useRef(personIconEntities)
  personIconEntitiesRef.cufrrent = personIconEntities
  const floorRef = useRef(floor)
  floorRef.current = floor

=======
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
  // 所有房间的使用情况
  const [roomUseStatus, setRoomUseStatus] = useState([])
  const { run: fetchAllUseRoomInfo } = useRequest()

<<<<<<< HEAD
  // 监听滚轮缩放，达到设定的高度时，更新人物图标的缩放比例
  const { subscribe, unsubscribe } = useZoom({
    key: 'roomPersonIcon',
    onChange: function (p) {
      const floorNumber = Build.utils.getFloorNumberFromFloorName(floorRef.current.floorId)
      console.log(p, floorNumber)
      // 根据最大高度做显示,根据可显示高度做比例缩放
      if (personIconEntitiesRef.current.length > 0) {
      }
    }
  })

=======
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
  // 获取所有房间的使用情况
  const fetchRoomUseStatus = () => {
    fetchAllUseRoomInfo(allRoomUseStatusConfig()).then(res => {
      if (Number(res.code) === 0) {
        setRoomUseStatus(res.data)
<<<<<<< HEAD

        subscribe()
=======
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
      }
    })
  }


  useEffect(() => {
    if (floor) {
      fetchRoomUseStatus()
<<<<<<< HEAD
      // subscribe()
    } else {
      // unsubscribe()
      setPersonIconEntities([])
=======
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
    }
  }, [floor])


  useEffect(() => {
    if (roomUseStatus.length > 0 && floor) {

      const mapViewer = getMapViewer()

      // 先过滤出使用中的房间
      const usedRoomInfo = roomUseStatus.filter(room => Number(room.roomStatus) === 1)


      const roomUsedInfo = []
      // 然后是当前楼层的房间
      usedRoomInfo.forEach(room => {
        const roomInfo = roomConfig.find(roomInfo => roomInfo.roomIndexCode === room.roomIndexCode)
        if (roomInfo) {
          const currentFloorName = Build.utils.getFloorNameFromFloorId(roomInfo.floor_id)
          if (floor.floorId === currentFloorName) {
            roomUsedInfo.push(roomInfo)
          }
        }
      })

      const roomPersonIconConfig = []
      for (let roomConfig of roomUsedInfo) {
        if (roomConfig.location !== undefined) {
          roomPersonIconConfig.push(mapViewer.drawer.config.imageLabel({
            gid: "PERSON_" + roomConfig.roomIndexCode,
            attr: {
              roomIndexCode: roomConfig.roomIndexCode
            },
            screen: true,
            scale: 0.5,
            iconStyle: 'person-men3.png',
            location: roomConfig.location
          }))
        }
      }

      const controller = mapViewer.model.getController()
      controller.addMany(roomPersonIconConfig)
<<<<<<< HEAD

      setPersonIconEntities(roomPersonIconConfig)
=======
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6
    }
  }, [roomUseStatus, floor])

  return {
    fetchRoomUseStatus
  }
}


export default useRoomStatus

