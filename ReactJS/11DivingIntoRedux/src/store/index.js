import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state = { counter: 0 }, { type, payload }) => {
  switch (type) {
    case "increment":
      return { counter: state.counter + 1 };

    case "decrement":
      return { counter: state.counter - 1 };
    default:
      return state;
  }
};

// const counterReducer = (state = { counter: 0 }, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1 };
//   }
//   if (action.type === "decrement") {
//     return { counter: state.counter - 1 };
//   }
//   return state;
// };

const store = configureStore({ reducer: counterReducer });

export default store;
