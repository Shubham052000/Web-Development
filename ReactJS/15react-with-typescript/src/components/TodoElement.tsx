import React from "react";

const TodoElement: React.FC<{ text: string }> = (props) => {
  return <li>{props.text}</li>;
};

export default TodoElement;
