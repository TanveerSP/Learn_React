import { configureStore } from "@reduxjs/toolkit";
import counterTwoReducer from "../features/counterTwo";

export const store = configureStore({
  reducer: {
    counter: counterTwoReducer,
  },
});
