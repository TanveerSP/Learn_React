import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "Hello React",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
    },
    removeTodo: (state) => {},
  },
});
