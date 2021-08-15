import React, { useState } from "react";
import { TodoItem } from "./TodoItem";
import { Input } from "./Input";
import "../index.css";

export const TodoList = () => {
  const defaultList = [
    { id: 1, text: "Buy car", completed: false },
    { id: 2, text: "fuck u", completed: true },
    { id: 3, text: "asd", completed: false },
    { id: 4, text: "Buyher", completed: false },
    { id: 5, text: "asdasf", completed: false },
  ];

  const [todos, setTodos] = useState(defaultList);

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

  return (
    <div className="todoList">
      {todos.map((todo, index) => {
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
      })}
      <Input onAddTodos={addTodos} />
    </div>
  );
};
