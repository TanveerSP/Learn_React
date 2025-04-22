import React, { useState } from "react";

const TodoList = () => {

    let [task, setTask] = useState([]); // store tasks in an array
    let [newTask, setNewTask] = useState("") // store current input task

    const addTask = () => {
        if(newTask.trim()){
            setTask([...task, newTask]) // add task to the list using '...' sprid oprator
            setNewTask(""); // Clear input field after adding the task
        }
    };

    const deleteTask = (ind) => {
        setTask(task.filter((_,i) => i !== ind));
    }

  return (
    <div className="w-full max-w-md p-4 bg-gray-200">
      <h2 className="text-xl font-bold">To-Do List</h2>

      <input
        type="text"
        placeholder="Add a task"
        className="border p-2 w-full my-2"
        onChange={(e)=> setNewTask(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={addTask}
      >
        Add Task
      </button>

      <ul className="mt-4">
        {task.map((ele, ind) => (
            <li key={ind}className="flex justify-between items-center my-2 p-2 bg-white rounded" >
                <span>{ele}</span>
            
                <button 
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => deleteTask(ind)}
                >
                Delete
                </button>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
