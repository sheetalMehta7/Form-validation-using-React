import React from "react";
import listCss from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  return (
    <Card className={listCss.users}>
      <ul>
        {props.usersData.map((data) => (
          <li key={data.id}>
            {data.name} ({data.age} Years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
