// import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "increment":
      return { counter: state.counter + 1, showCounter: state.showCounter };

    case "increase":
      return {
        counter: state.counter + payload,
        showCounter: state.showCounter,
      };

    case "decrement":
      return { counter: state.counter - 1, showCounter: state.showCounter };

    case "toggle":
      return { counter: state.counter, showCounter: !state.showCounter };

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
