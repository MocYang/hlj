/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/23 13:48
 * @File: slice.js
 * @Description
 */
import { createSlice } from '@reduxjs/toolkit'

// 留置室内相关的slice
export const roomSlice = createSlice({
  name: 'room',
  initialState: {
    // 房间信息弹窗是否显示
<<<<<<< HEAD
    roomPopUpVisible: false,
=======
    roomPopUpVisible: true,
>>>>>>> cc04770de46141d43f763beb6813d08c222386d6

    // 点击人物图标时，关联的房间相关信息
    roomInfo: null,

    // 接口中返回的人员信息
    suspectInfo: {},

    // 房间环境信息
    environmentInfo: {}
  },
  reducers: {
    setRoomPopUpVisible: (state, action) => {
      state.roomPopUpVisible = action.payload
    },

    setSuspectInfo: (state, action) => {
      state.suspectInfo = action.payload
    },

    setEnvironmentInfo: (state, action) => {
      state.environmentInfo = action.payload
    },

    setRoomInfo: (state, action) => {
      state.roomInfo = action.payload
    }
  }
})

export const {
  setRoomPopUpVisible,
  setSuspectInfo,
  setEnvironmentInfo,
  setRoomInfo
} = roomSlice.actions

export const selectRoomPopupVisible = store => store.room.roomPopUpVisible
export const selectSuspectInfo = store => store.room.suspectInfo
export const selectEnvironmentInfo = store => store.room.environmentInfo
export const selectRoomInfo = store => store.room.roomInfo

export default roomSlice.reducer
