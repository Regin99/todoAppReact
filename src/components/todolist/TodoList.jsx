import React from "react";
import { TodoItem } from "../todoitem/TodoItem";
import { Input } from "../input/Input";
import "./style.css";
import { store } from "../../store/store";
import { useSelector } from "react-redux";

export const TodoList = () => {
  const todos = useSelector((state) => state);

  store.subscribe(() => {
    localStorage.setItem("state", JSON.stringify(store.getState()));
  });

  return (
    <div className="todoList">
      {todos.length > 0 ? (
        todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              onDeleteTodo={(index) => {
                const deleteTodoAction = {
                  type: "DELETE_TODO",
                  payload: index,
                };
                store.dispatch(deleteTodoAction);
              }}
              onToggleTodo={(index) => {
                const toggleTodoAction = {
                  type: "TOGGLE_TODO",
                  payload: index,
                };
                store.dispatch(toggleTodoAction);
              }}
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

      <Input
        onAddTodos={(text) => {
          const addTodoAction = {
            type: "ADD_TODO",
            payload: text,
          };
          store.dispatch(addTodoAction);
        }}
      />
    </div>
  );
};
