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


const useRoomStatus = ({floor}) => {
  // 所有房间的使用情况
  const [roomUseStatus, setRoomUseStatus] = useState([])
  const { run: fetchAllUseRoomInfo} = useRequest()

  // 获取所有房间的使用情况
  const fetchRoomUseStatus = ()=> {
    fetchAllUseRoomInfo(allRoomUseStatusConfig()).then(res =>{
      if (res.code === 0) {
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
    if(roomUseStatus.length > 0) {

    }
  },[roomUseStatus])

  return {
    fetchRoomUseStatus
  }
}


export default useRoomStatus

