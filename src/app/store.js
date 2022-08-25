import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import VideoSlice from '../pages/home/popup/VideoPreviewPopup/slice'
import machineSlice from '../pages/home/popup/machineInfoPopup/slice'
import roomInfoSlice from '../pages/home/popup/roomInfoPopup/slice'

export const store = configureStore({
  reducer: {
    // global slice
    app: appSlice,

    // 视频相关
    video: VideoSlice,

    // 机房信息
    machine: machineSlice,

    // 留置室内相关的信息- 留置人员和环境
    room: roomInfoSlice
  }
})
