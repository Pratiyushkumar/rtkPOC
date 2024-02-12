import { configureStore } from "@reduxjs/toolkit";
import { PostApi } from "./Services/PostApi";

export const store = configureStore({
  reducer: {
    [PostApi.reducerPath]: PostApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(PostApi.middleware),
});
