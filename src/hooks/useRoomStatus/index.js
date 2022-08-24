/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/19 14:59
 * @File: index.js
 * @Description 房间的使用情况 - 包括房间模型变色，加载人物图标，监听房间点击事件，监听房间点击事件
 */

import { useEffect, useState } from 'react'
import { allRoomUseStatusConfig } from '../../api'
import useRequest from '../useRequest'
import { getMapViewer } from '../../components/MapContainer'
import roomConfig from './roomConfig'
import Build from '../../utils/build'

const useRoomStatus = ({floor}) => {
  // 所有房间的使用情况
  const [roomUseStatus, setRoomUseStatus] = useState([])
  const { run: fetchAllUseRoomInfo} = useRequest()

  // 获取所有房间的使用情况
  const fetchRoomUseStatus = ()=> {
    fetchAllUseRoomInfo(allRoomUseStatusConfig()).then(res =>{
      if (Number(res.code) === 0) {
        setRoomUseStatus(res.data)
      }
    })
  }


  useEffect(() =>{
    if(floor) {
      fetchRoomUseStatus()
    }
  }, [floor])


  useEffect(()=> {
    if(roomUseStatus.length > 0 && floor) {

      const mapViewer = getMapViewer()

      // 先过滤出使用中的房间
      const usedRoomInfo = roomUseStatus.filter(room => Number(room.roomStatus) === 1)


      const roomUsedInfo = []
      // 然后是当前楼层的房间
      usedRoomInfo.forEach(room => {
        const roomInfo = roomConfig.find(roomInfo => roomInfo.roomIndexCode === room.roomIndexCode)
        if (roomInfo) {
          const currentFloorName  = Build.utils.getFloorNameFromFloorId(roomInfo.floor_id)
          if (floor.floorId  === currentFloorName) {
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
    }
  },[roomUseStatus, floor])

  return {
    fetchRoomUseStatus
  }
}


export default useRoomStatus

