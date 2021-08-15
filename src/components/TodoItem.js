import React, { useState } from "react";
import "../index.css";

export const TodoItem = (props) => {
  const [flag, setFlag] = useState(props.flag);
  const styles = ["todoItem"];

  props.flag ? styles.push("completed") : styles.push(" ");

  function toggleChecked() {
    setFlag(!flag);
    props.onChangeFlag(!flag, props.index);
  }

  function deleteTodo(event) {
    setFlag(!flag);
    event.preventDefault();
    props.onDeleteTodo(props.index);
  }
  return (
    <div className={styles.join(" ")}>
      <div>
        <strong>{props.index + 1}</strong>
        <input type="checkbox" checked={props.flag} onChange={toggleChecked} />
      </div>
      <li>{props.todo.text}</li>
      <button onClick={deleteTodo}>X</button>
    </div>
  );
};
