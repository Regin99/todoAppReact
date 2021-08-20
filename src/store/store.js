import { createStore } from "redux";
import { todosReducer } from "./reducers/todosReducer";

export const persistedState = localStorage.getItem("state")
  ? JSON.parse(localStorage.getItem("state"))
  : [
      { id: 1, text: "Buy a car", flag: false },
      { id: 2, text: "Do homework", flag: true },
      { id: 3, text: "Read a book", flag: false },
    ];

export const store = createStore(todosReducer, persistedState);
