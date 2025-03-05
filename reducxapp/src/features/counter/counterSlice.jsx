import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  // this is name of slice 'counter'
  name: "counter",
  initialState: {
    value: 0,
  },
  // here reducer start
  reducers: {
    // increment is action
    increment: (state) => {
      state.value += 1;
    },
    // decrement is action
    decrement: (state) => {
      if (state.value > 0) {
        state.value -= 1;
      }
    },
    reset: (state) => {
        state.value = 0;
    },
    // incrementByAmount is action reducer
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

// Action creators are generated for each reducer
// function
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

export default counterSlice.reducer;
