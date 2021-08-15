import React, { useState } from "react";
import "../index.css";

export const Input = (props) => {
  const [value, setValue] = useState("Enter your todo");
  function changeValue(event) {
    !event.target.value
      ? setValue(event.target.value + "Enter your todo")
      : setValue(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();
    props.onAddTodos(value);
  }

  return (
    <form className="inputForm">
      <h1>{value}</h1>
      <input type="text" onChange={changeValue} />
      <button onClick={addTodo}>Add</button>
    </form>
  );
};
