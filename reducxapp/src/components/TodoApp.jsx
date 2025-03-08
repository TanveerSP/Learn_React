import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoEvent,
  deleteTodoEvent,
  updateTodoEvent,
} from "../features/todo-slice";
import { useState } from "react";

const TodoApp = () => {
  const [input, setInput] = useState("");
  const todo = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const addTodo = () => {
    if (input.trim() !== "") {
      dispatch(addTodoEvent(input));
      setInput("");
    }
  };

  const handleUpdate = (id, oldText) => {
    const newText = prompt("Enter new text:", oldText);
    if (newText && newText.trim() !== "") {
      dispatch(updateTodoEvent({ id, newText }));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Todo App
        </h2>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add Todo Task.."
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todo.map((todo) => (
            <div key={todo.id}>
              <li className="bg-gray-200 p-2 rounded-md text-gray-700 flex justify-between items-center">
                {todo.text}

                <div className="space-x-1">
                  {/* Update */}
                  <button
                    onClick={handleUpdate}
                    className="bg-yellow-500 text-white px-2 py-1 rounded-md hover:bg-yellow-600 transition"
                  >
                    Update
                  </button>

                  {/* Delete */}
                  <button
                    onClick={() => dispatch(deleteTodoEvent(todo.id))}
                    className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
