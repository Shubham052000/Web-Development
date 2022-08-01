import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import Search from "./Search";
import IngredientList from "./IngredientList";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  const addIngredientHandler = async (ingredient) => {
    const response = await fetch(
      "https://react-http-174dc-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify({ ingredient }),
        headers: { "Content-Type": "application/json" },
      }
    );

    const respData = response.json();

    if (response.ok) {
      setIngredients((prevIngredients) => [
        ...prevIngredients,
        { id: respData.name, ...ingredient },
      ]);
    }
  };

  const ingredientRemoveHandler = (id) => {
    setIngredients((prevIngredients) =>
      prevIngredients.filter((ig) => ig.id !== id)
    );
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={ingredients}
          onRemoveItem={ingredientRemoveHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
