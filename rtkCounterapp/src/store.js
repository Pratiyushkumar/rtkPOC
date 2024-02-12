import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/CounterSlice";

const store = configureStore({
  reducer: {
    ele: counterReducer,
  },
});

export default store;
