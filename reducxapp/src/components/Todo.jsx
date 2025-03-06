import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      {todos.map((ele) => (
        <li key={ele.id}>
          {ele.text}
          <button onClick={() => dispatch(removeTodo(ele.id))}>delete</button>
        </li>
      ))}
    </>
  );
};

export default Todo;
