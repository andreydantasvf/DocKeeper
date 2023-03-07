import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'category',
  initialState: {
    id: 0,
    name: ''
  },
  reducers: {
    handleCategory(state, { payload }) {
      return { ...state, id: payload }
    },
    handleName(state, { payload }) {
      return { ...state, name: payload }
    }
  }
})

export const { handleCategory, handleName } = slice.actions;

export default slice.reducer;