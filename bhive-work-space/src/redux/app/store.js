import { configureStore } from "@reduxjs/toolkit";
import workSpace from "../feature/workSpaceSlice";

export const store = configureStore({
  reducer: {
    workSpaceSlice: workSpace,
  },
});
