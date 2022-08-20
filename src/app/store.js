import { configureStore } from '@reduxjs/toolkit'
import appSlice from './appSlice'
import VideoSlice from '../pages/home/popup/VideoPreviewPopup/slice'

export const store = configureStore({
  reducer: {
    // global slice
    app: appSlice,

    // 视频相关
    video: VideoSlice
  }
})
