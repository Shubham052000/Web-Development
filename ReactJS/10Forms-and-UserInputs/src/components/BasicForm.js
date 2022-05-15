import React from "react";
import useInputBF from "../hooks/use-inputBF";

const BasicForm = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";

  const {
    value: firstName,
    valueIsValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueBlurredHandler: firstNameBlurredHandler,
    reset: resetFirstName,
  } = useInputBF(isNotEmpty);

  const {
    value: lastName,
    valueIsValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueBlurredHandler: lastNameBlurredHandler,
    reset: resetLastName,
  } = useInputBF(isNotEmpty);

  const {
    value: email,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurredHandler: emailBlurredHandler,
    reset: resetEmail,
  } = useInputBF((value) => value.includes("@"));

  let formIsValid = firstNameIsValid && lastNameIsValid && emailIsValid;

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("FirstName: ", firstName);
    console.log("LastName: ", lastName);
    console.log("Email: ", email);
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="fname"
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurredHandler}
            value={firstName}
          />
          {firstNameHasError && (
            <p className="error-text">First name is required</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="lname"
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurredHandler}
            value={lastName}
          />
          {lastNameHasError && (
            <p className="error-text">Last name is required</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={emailChangeHandler}
          onBlur={emailBlurredHandler}
        />
        {emailHasError && (
          <p className="error-text">Enter a valid Email address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
