import { createSlice } from "@reduxjs/toolkit";
import workSpaces from "../../data/data.json";

const initialState = {
  workSpace: [],
  feature: [],
};

const workSpaceSlice = createSlice({
  name: "workSpace",
  initialState,
  reducers: {
    setWorkSpace: (state, action) => {
      state.workSpace = workSpaces;
    },
    setFeatures: (state, action) => {
      state.feature = action.payload;
    },
  },
});

export const { setFeatures, setWorkSpace } = workSpaceSlice.actions;
export default workSpaceSlice.reducer;
