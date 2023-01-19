import React, { useState } from "react";
import AddUser from "./Components/Users/AddUser";
import UserList from "./Components/Users/UserList";

const App = (props) => {
  const [usersList, setUsersList] = useState([]);
  const getUserData = (uName, uAge) => {
    setUsersList((prevData) => {
      return [
        ...prevData,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <AddUser onUserInput={getUserData} />
      <UserList usersData={usersList} />
    </div>
  );
};

export default App;
