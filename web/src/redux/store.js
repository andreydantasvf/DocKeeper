import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./menuSlice";
import categoryReducer from "./categorySlice";

export default configureStore({
  reducer: {
    menu: menuReducer,
    category: categoryReducer
  }
});