import React, { useState } from "react";
import { TodoItem } from "../todoitem/TodoItem";
import { Input } from "../input/Input";
import "./style.css";

const readList = () => {
  const todos = localStorage.getItem("todos");
  if (todos) {
    return JSON.parse(todos);
  }
  return [
    { id: 1, text: "Buy a car", completed: false },
    { id: 2, text: "Do homework", completed: true },
    { id: 3, text: "Read a book", completed: false },
  ];
};

export const TodoList = () => {
  const [todos, setTodos] = useState(readList());

  const saveList = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodos = (value) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: value, completed: false },
    ]);
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((todo, i) => index !== i));
  };

  const changeFlag = (completed, index) => {
    setTodos(
      todos.map((todo, i) => {
        if (index === i) {
          return { ...todo, completed };
        }
        return todo;
      })
    );
  };

  saveList();
  return (
    <div className="todoList">
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <TodoItem
              todo={todo}
              key={index}
              flag={todo.completed}
              onDeleteTodo={deleteTodo}
              onChangeFlag={changeFlag}
              index={index}
            />
          );
        })
      ) : (
        <div className="todoList__empty">
          <h2>You have no todos</h2>
          <p>Enter your first todo below</p>
        </div>
      )}

      <Input onAddTodos={addTodos} />
    </div>
  );
};
