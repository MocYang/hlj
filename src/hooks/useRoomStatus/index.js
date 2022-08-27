/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/19 14:59
 * @File: index.js
 * @Description 房间的使用情况 - 包括房间模型变色，加载人物图标，监听房间点击事件，监听房间点击事件
 */

import { useCallback, useEffect, useRef, useState } from 'react'
import { allRoomUseStatusConfig } from '../../api'
import useRequest from '../useRequest'
import { getMapViewer } from '../../components/MapContainer'
import roomConfig from './roomConfig'
import Build from '../../utils/build'
import { useDispatch } from 'react-redux'
import { usePopupController } from '../../components/popup/PopupContainer'
import {
  setRoomInfo,
  setRoomPopUpVisible
} from '../../pages/home/popup/roomInfoPopup/slice'
import useZoom from '../useZoom'

export const useRoomIconClick = () => {
  const dispatch = useDispatch()

  const popupController = usePopupController()

  const addPersonIconClick = useCallback(() => {
    const mapViewer = getMapViewer()
    mapViewer.event.onClick('PERSON', (res) => {
      popupController.activate(setRoomPopUpVisible)

      dispatch(
        setRoomInfo({
          roomIndexCode: res.attr.roomIndexCode
        })
      )
    })
  }, [])

  return {
    addPersonIconClick
  }
}

const useRoomStatus = ({ floor }) => {
  const [personIconEntities, setPersonIconEntities] = useState([])

  const personIconEntitiesRef = useRef(personIconEntities)
  personIconEntitiesRef.cufrrent = personIconEntities
  const floorRef = useRef(floor)
  floorRef.current = floor
  // 所有房间的使用情况
  const [roomUseStatus, setRoomUseStatus] = useState([])
  const { run: fetchAllUseRoomInfo } = useRequest()

  // 监听滚轮缩放，达到设定的高度时，更新人物图标的缩放比例
  const { subscribe, unsubscribe } = useZoom({
    key: 'roomPersonIcon',
    onChange: function (p) {
      // const floorNumber = Build.utils.getFloorNumberFromFloorName(
      //   floorRef.current.floorId
      // )
      // console.log(p, floorNumber)
      // // 根据最大高度做显示,根据可显示高度做比例缩放
      // if (personIconEntitiesRef.current.length > 0) {
      // }
    }
  })

  // 获取所有房间的使用情况
  const fetchRoomUseStatus = () => {
    fetchAllUseRoomInfo(allRoomUseStatusConfig()).then((res) => {
      if (Number(res.code) === 0) {
        setRoomUseStatus(res.data)

        subscribe()
      }
    })
  }

  useEffect(() => {
    if (floor) {
      fetchRoomUseStatus()
      subscribe()
    } else {
      unsubscribe()
      setPersonIconEntities([])
    }
  }, [floor])

  useEffect(() => {
    if (roomUseStatus.length > 0 && floor) {
      const mapViewer = getMapViewer()

      // 先过滤出使用中的房间
      const usedRoomInfo = roomUseStatus.filter(
        (room) => Number(room.roomStatus) === 1
      )

      const roomUsedInfo = []
      // 然后是当前楼层的房间
      usedRoomInfo.forEach((room) => {
        const roomInfo = roomConfig.find(
          (roomInfo) => roomInfo.roomIndexCode === room.roomIndexCode
        )
        if (roomInfo) {
          const currentFloorName = Build.utils.getFloorNameFromFloorId(
            roomInfo.floor_id
          )

          for (let activeFloor of floor) {
            if (!activeFloor.active) {
              continue
            }

            if (activeFloor.floorId === currentFloorName) {
              roomUsedInfo.push(roomInfo)
            }
          }
        }
      })

      const roomPersonIconConfig = []
      for (let roomConfig of roomUsedInfo) {
        if (roomConfig.location !== undefined) {
          roomPersonIconConfig.push(
            mapViewer.drawer.config.imageLabel({
              gid: 'PERSON_' + roomConfig.roomIndexCode,
              attr: {
                roomIndexCode: roomConfig.roomIndexCode
              },
              screen: true,
              scale: 0.5,
              iconStyle: 'person-men3.png',
              location: {
                ...roomConfig.location,
                z: roomConfig.location.z + 400
              }
            })
          )
        }
      }

      const controller = mapViewer.model.getController()
      controller.addMany(roomPersonIconConfig)

      setPersonIconEntities(roomPersonIconConfig)
    } else {
      setPersonIconEntities([])
    }
  }, [roomUseStatus, floor])

  return {
    fetchRoomUseStatus
  }
}


export default useRoomStatus

