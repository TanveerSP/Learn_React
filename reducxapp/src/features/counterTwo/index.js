import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

const counterTwoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCount : (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    allClearCounts: (state) => {
      state.count = 0;
    },
  },
});

export const { incrementCount , decrementCount, allClearCounts } = counterTwoSlice.actions;
export default counterTwoSlice.reducer;
