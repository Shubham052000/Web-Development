import React, { useState, useCallback } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const filteredIngredientHandler = useCallback((filteredIngredients) => {
    setIngredients(filteredIngredients);
  }, []);

  const addIngredientHandler = async (ingredient) => {
    setIsLoading(true);
    const response = await fetch(
      "https://react-http-174dc-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    );

    const respData = await response.json();
    setIsLoading(false);
    if (response.ok) {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: respData.name, ...ingredient },
      ]);
    }
  };

  const ingredientRemoveHandler = async (id) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://react-http-174dc-default-rtdb.firebaseio.com/ingredients/${id}.jon`,
        {
          method: "DELETE",
        }
      );
      if (response) {
        setIsLoading(false);
        setIngredients((prevIngredients) =>
          prevIngredients.filter((ig) => ig.id !== id)
        );
      }
    } catch (error) {
      setError("Something went wrong!");
    }
  };

  const clearError = () => {
    setError(null);
    setIsLoading(false);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
      <IngredientForm
        onAddIngredient={addIngredientHandler}
        loading={isLoading}
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
