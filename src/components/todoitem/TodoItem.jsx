import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

export const TodoItem = (props) => {
  const styles = ["todoItem"];

  const todo = useSelector((state) => state[props.index]);

  todo.flag ? styles.push("completed") : styles.push(" ");

  return (
    <div className={styles.join(" ")}>
      <div>
        <strong>{props.index + 1}</strong>
        <input
          type="checkbox"
          checked={todo.flag}
          onChange={() => {
            props.onToggleTodo(props.index);
          }}
        />
      </div>
      <li>{todo.text}</li>
      <button
        onClick={(event) => {
          event.preventDefault();
          props.onDeleteTodo(props.index);
        }}
      >
        X
      </button>
    </div>
  );
};
