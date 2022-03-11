import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0 ||
      +enteredAge < 1
    ) {
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const userNameChangeHandler = (e) => {
    setEnteredUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnteredAge(e.target.value);
  };
  return (
    <div>
      <ErrorModal title="An error occured!!" message="Something went wrong!" />
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username: </label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={userNameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Years): </label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;