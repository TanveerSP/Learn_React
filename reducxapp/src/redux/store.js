import { configureStore } from "@reduxjs/toolkit";
import counterTwoReducer from "../features/counterTwo";
import todoSliceReducer from "../features/todo-slice"

export const store = configureStore({
  reducer: {
    counter: counterTwoReducer,
    todo: todoSliceReducer,
  },
});
