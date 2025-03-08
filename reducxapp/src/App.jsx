import "./App.css";
import AddTodo from "./components/AddTodo";
import Counter from "./components/Counter";
import PracticeCounter from "./components/PracticeCounter";
import Todo from "./components/Todo";
import TodoApp from "./components/TodoApp";

function App() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">Reducx Practice</h1>
      {/* <Counter /> */}
      {/* <AddTodo />
      <Todo /> */}
      {/* <PracticeCounter /> */}
      <TodoApp />
    </div>
  );
}

export default App;
