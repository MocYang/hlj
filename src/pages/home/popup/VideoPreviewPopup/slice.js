/**
 * @Author: MocYang
 * @Email: 958292256@qq.com
 * @Date: 2022/8/17 12:20
 * @File: slice.js
 * @Description
 */

import { createSlice } from '@reduxjs/toolkit'


export const videoSlice = createSlice({
  name: 'video',
  initialState: {
    clickCameraConfig: {},

    // 视频预览的弹窗是否显示
    isVideoPreviewPopupShow: false,
  },
  reducers: {
    setClickCameraConfig: (state, action) => {
      state.clickCameraConfig = action.payload
    },

    setIsVideoPreviewPopupShow: (state, action) => {
      state.isVideoPreviewPopupShow = action.payload
    },
  }
})

export const {
  setIsVideoPreviewPopupShow,
  setClickCameraConfig
} = videoSlice.actions

export const selectClickCameraConfig = (store) => store.video.clickCameraConfig
export const selectIsVideoPreviewPopupShow = (store) => store.video.isVideoPreviewPopupShow


export default videoSlice.reducer