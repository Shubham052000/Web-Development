import React, { useState } from "react";

import "./List.css";

const List = () => {
  const [items, setItems] = useState([1, 2, 3]);

  const addItemHandler = () => {
    setItems((prevState) => {
      return prevState.concat(prevState.length + 1);
    });
  };

  const removeItemHandler = (selIndex) => {
    console.log("selIndex", selIndex);
    setItems((prevState) => {
      return prevState.filter((item, index) => index !== selIndex);
    });
  };

  const listItems = items.map((item, index) => (
    <li
      key={index}
      className="ListItem"
      onClick={removeItemHandler.bind(null, index)}
    >
      {item}
    </li>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <ul className="List">{listItems}</ul>
    </div>
  );
};

export default List;
