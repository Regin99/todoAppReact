import { persistedState } from "../store";

export const todosReducer = (state = persistedState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: state.length + 1, text: action.payload, flag: false },
      ];
    case "DELETE_TODO":
      return state.filter((todo, i) => i !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo, i) => {
        if (i === action.payload) {
          return { ...todo, flag: !todo.flag };
        }
        return todo;
      });
    default:
      return state;
  }
};
