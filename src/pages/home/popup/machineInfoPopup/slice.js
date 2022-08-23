/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/23 13:48
 * @File: slice.js
 * @Description
 */
import { createSlice } from '@reduxjs/toolkit'

export const machineSlice = createSlice({
  name: 'machine',
  initialState: {
    // 机房信息弹窗是否显示
    machinePopUpVisible: false,

    // 接口中返回的机房信息
    machineInfo: {}
  },
  reducers: {
    setMachinePopUpVisible: (state, action) => {
      state.machinePopUpVisible = action.payload
    },

    setMachineInfo: (state, action) => {
      state.machineInfo = state.action.payload
    }
  }
})

export const {
  setMachinePopUpVisible,
  setMachineInfo,
} = machineSlice.actions

export const selectMachinePopupVisible = store => store.machine.machinePopUpVisible
export const selectMachineInfo = store => store.machine.machineInfo

export default machineSlice.reducer
