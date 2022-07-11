import React from "react";
import Todo from "../models/todo";
import TodoElement from "./TodoElement";

type TodosProps = {
  items: Todo[];
};

const Todos: React.FC<TodosProps> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoElement key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
