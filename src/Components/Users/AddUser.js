import React, { useState } from "react";
import style from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  const getUserNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const getUserAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const getUserDataHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid username and age.",
      });
      return;
    }
    if (+userAge < 1) {
      //+ is for force conversion to int type data
      setError({
        title: "Invalid Input",
        message: "Please enter a valid age(>0).",
      });
      return;
    }
    props.onUserInput(userName, userAge);
    setUserName("");
    setUserAge("");
  };

  const removeErrorHandler = () => {
    setError(null);
  };

  return (
    <Wrapper>
      {error && (
        <ErrorModal errorGenerated={error} onConfirm={removeErrorHandler} />
      )}
      <Card className={style.input}>
        <form onSubmit={getUserDataHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={getUserNameHandler}
            value={userName}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            onChange={getUserAgeHandler}
            value={userAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
