import React, { useState } from "react";
import "./style.css";

export const Input = (props) => {
  const [inputText, setInputText] = useState("");

  return (
    <form className="inputForm">
      <h1>{inputText !== "" ? inputText : "Enter your todo"}</h1>
      <input
        type="text"
        value={inputText}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          props.onAddTodos(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </form>
  );
};
