import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: 'menu',
  initialState: {
    isMenuVisible: false
  },
  reducers: {
    toggleMenu(state) {
      state.isMenuVisible = !state.isMenuVisible;
    }
  }
})

export const { toggleMenu } = slice.actions;

export default slice.reducer;