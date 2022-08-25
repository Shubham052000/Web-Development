import React, { useState } from "react";

import Card from "../UI/Card";
import LoadingIndicator from "../UI/LoadingIndicator";
import "./IngredientForm.css";

const IngredientForm = React.memo((props) => {
  const [inputState, setInputState] = useState({
    title: "",
    amount: "",
  });

  const titleHandler = (event) => {
    setInputState((prevInput) => ({
      ...prevInput,
      title: event.target.value,
    }));
  };

  const amountHandler = (event) => {
    setInputState((prevInput) => ({
      ...prevInput,
      amount: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onAddIngredient({
      title: inputState.title,
      amount: inputState.amount,
    });
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={titleHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={amountHandler}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
            {props.loading && <LoadingIndicator />}
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
