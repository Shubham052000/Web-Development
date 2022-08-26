import React, { useReducer, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

const ingredientReducer = (currentIngredients, action) => {
  switch (action.type) {
    case "SET":
      return action.ingredients;
    case "ADD":
      return [...currentIngredients, action.ingredient];
    case "DELETE":
      return currentIngredients.filter((ing) => ing.id !== action.id);
    default:
      throw new Error("Should not get there!");
  }
};

const httpReducer = (currHttpState, action) => {
  switch (action.type) {
    case "SEND":
      return { loading: true, error: null };
    case "RESPONSE":
      return { ...currHttpState, loading: false };
    case "ERROR":
      return { loading: false, error: action.errorData };
    case "CLEAR":
      return { ...currHttpState, error: null };
    default:
      throw new Error("Should not reach here");
  }
};

function Ingredients() {
  const [ingredients, dispatch] = useReducer(ingredientReducer, []);
  const [httpState, dispatchHttp] = useReducer(httpReducer, {
    error: null,
    loading: false,
  });

  const filteredIngredientHandler = useCallback((filteredIngredients) => {
    dispatch({ type: "SET", ingredients: filteredIngredients });
  }, []);

  const addIngredientHandler = async (ingredient) => {
    dispatchHttp({ type: "SEND" });
    const response = await fetch(
      "https://react-http-174dc-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    );

    const respData = await response.json();
    dispatchHttp({ type: "RESPONSE" });
    if (response.ok) {
      dispatch({
        type: "ADD",
        ingredient: { id: respData.name, ...ingredient },
      });
    }
  };

  const ingredientRemoveHandler = async (id) => {
    try {
      dispatchHttp({ type: "SEND" });
      const response = await fetch(
        `https://react-http-174dc-default-rtdb.firebaseio.com/ingredients/${id}.json`,
        {
          method: "DELETE",
        }
      );
      if (response) {
        dispatchHttp({ type: "RESPONSE" });
        dispatch({ type: "DELETE", id });
      }
    } catch (error) {
      dispatchHttp({ type: "ERROR", errorData: "Something went wrong!" });
    }
  };

  const clearError = () => {
    dispatch({ type: "CLEAR" });
  };

  return (
    <div className="App">
      {httpState.error && (
        <ErrorModal onClose={clearError}>{httpState.error}</ErrorModal>
      )}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={httpState.loading}
      />
      <section>
        <Search onLoadedIngredients={filteredIngredientHandler} />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={ingredientRemoveHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
