import { useReducer } from "react";

const initialInputState = {
  value: "",
  valueTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value, valueTouched: state.valueTouched };
  }
  if (action.type === "BLUR") {
    return { valueTouched: true, value: state.value };
  }
  if (action.type === "RESET") {
    return { valueTouched: false, value: "" };
  }
  return inputStateReducer;
};

const useInputBF = (valueValidator) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = valueValidator(inputState.value);
  const hasError = !valueIsValid && inputState.valueTouched;

  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const valueBlurredHandler = () => {
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return {
    value: inputState.value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurredHandler,
    reset,
  };
};

export default useInputBF;
