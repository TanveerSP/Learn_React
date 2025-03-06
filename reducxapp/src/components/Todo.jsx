import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

const Todo = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (id) => {
    if (editId.trim() === "") return;
    dispatch(updateTodo({ id, newText: editText }));
    setEditId(null);
    setEditId("");
  };

  return (
    <>
      <div>Todos</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleUpdate(todo.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                  Delete
                </button>
                <button
                  onClick={() => {
                    setEditId(todo.id);
                    setEditText(todo.text);
                  }}
                >
                  Edit
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todo;
