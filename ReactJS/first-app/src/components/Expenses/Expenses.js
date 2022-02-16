import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const selectedValueHandler = (value) => {
    setFilterYear(value);
    console.log(value);
  };
  return (
    <Card className="expenses">
      <ExpensesFilter
        value={filterYear}
        onChangeFilter={selectedValueHandler}
      />
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
