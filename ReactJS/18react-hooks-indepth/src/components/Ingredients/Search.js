import React, { useState, useEffect, useRef } from "react";

import Card from "../UI/Card";
import "./Search.css";

const Search = React.memo((props) => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const { onLoadedIngredients } = props;
  const inputRef = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (enteredFilter === inputRef.current.value) {
        const loadedIngredients = [];
        const query =
          enteredFilter.length === 0
            ? ""
            : `?orderBy="title"&equalTo="${enteredFilter}"`;
        (async () => {
          const initialresp = await (
            await fetch(
              "https://react-http-174dc-default-rtdb.firebaseio.com/ingredients.json" +
                query
            )
          ).json();

          for (const key in initialresp) {
            loadedIngredients.push({
              id: key,
              title: initialresp[key].title,
              amount: initialresp[key].amount,
            });
          }
          onLoadedIngredients(loadedIngredients);
        })();
      }
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [enteredFilter, onLoadedIngredients, inputRef]);

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input
            type="text"
            ref={inputRef}
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
