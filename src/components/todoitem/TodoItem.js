import React, { useState } from "react";
import "./style.css";

export const TodoItem = (props) => {
  const [flag, setFlag] = useState(props.flag);
  const styles = ["todoItem"];

  props.flag ? styles.push("completed") : styles.push(" ");

  return (
    <div className={styles.join(" ")}>
      <div>
        <strong>{props.index + 1}</strong>
        <input
          type="checkbox"
          checked={props.flag}
          onChange={() => {
            setFlag(!flag);
            props.onChangeFlag(!flag, props.index);
          }}
        />
      </div>
      <li>{props.todo.text}</li>
      <button
        onClick={(event) => {
          setFlag(!flag);
          event.preventDefault();
          props.onDeleteTodo(props.index);
        }}
      >
        X
      </button>
    </div>
  );
};
