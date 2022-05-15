import { useState } from "react";

const useInputBF = (valueValidator) => {
  const [value, setValue] = useState("");
  const [valueTouched, setValueTouched] = useState(false);

  const valueIsValid = valueValidator(value);
  const hasError = !valueIsValid && valueTouched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const valueBlurredHandler = () => {
    setValueTouched(true);
  };

  const reset = () => {
    setValue("");
    setValueTouched(false);
  };

  return {
    value,
    valueIsValid,
    hasError,
    valueChangeHandler,
    valueBlurredHandler,
    reset,
  };
};

export default useInputBF;
