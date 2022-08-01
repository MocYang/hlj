/**
 * @Author: yangqixin
 * @TIME: 2022/5/26 08:56
 * @FILE: slice.js
 * @Email: 958292256@qq.com
 * @Description:
 */
import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const exampleAdapter = createEntityAdapter()

const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    exampleData: exampleAdapter.getInitialState(),
    // other data/state,
    data: null
  },
  reducers: {
    setExample: (state, action) => {
      exampleAdapter.setAll(state.example, action.payload)
    },

    setData: (state, action) => {
      state.data = action.payload
    }
  }
})

export const {
  setExample,
  setData
} = exampleSlice.actions


export const {
  selectAll: selectExampleList,
  selectById: selectExampleById
} = exampleAdapter.getSelectors(store => store.example.exampleData)

export const selectData = store => store.example.data


export default exampleSlice.reducer
