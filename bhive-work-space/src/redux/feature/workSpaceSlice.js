import { createSlice } from "@reduxjs/toolkit";
import workSpaces from "../../data/data.json";

const initialState = {
  workSpace: [],
  features: [],
};

const workSpaceSlice = createSlice({
  name: "workSpace",
  initialState,
  reducers: {
    setWorkSpace: (state, action) => {
      state.workSpace = workSpaces;
    },
    setFeatures: (state, action) => {
      console.log("===================", action);
      state.features = action.payload;
    },
  },
});

export const { setFeatures, setWorkSpace } = workSpaceSlice.actions;
export default workSpaceSlice.reducer;
