import { configureStore } from "@reduxjs/toolkit";
import { bugsSlice } from "./reducer";

export const store = configureStore({
  reducer: {
    bugs: bugsSlice.reducer,
  },
});
