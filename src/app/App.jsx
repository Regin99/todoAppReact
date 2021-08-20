import "./style.css";
import React from "react";
import { TodoList } from "../components/todolist/TodoList";

export const App = () => {
  return (
    <div className="app">
      <h1>Todo:</h1>
      <TodoList />
    </div>
  );
};
