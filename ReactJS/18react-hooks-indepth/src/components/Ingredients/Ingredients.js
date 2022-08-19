import React, { useState, useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const loadedIngredients = [];

    (async () => {
      const initialresp = await (
        await fetch(
          "https://react-http-174dc-default-rtdb.firebaseio.com/ingredients.json"
        )
      ).json();

      for (const key in initialresp) {
        loadedIngredients.push({
          id: key,
          title: initialresp[key].title,
          amount: initialresp[key].amount,
        });
      }

      setIngredients(loadedIngredients);
    })();
  }, []);

  const filteredIngredientHandler = (filteredIngredients) => {
    setIngredients(filteredIngredients);
  };

  const addIngredientHandler = async (ingredient) => {
    const response = await fetch(
      "https://react-http-174dc-default-rtdb.firebaseio.com/ingredients.json",
      {
        method: "POST",
        body: JSON.stringify(ingredient),
        headers: { "Content-Type": "application/json" },
      }
    );

    const respData = await response.json();
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
