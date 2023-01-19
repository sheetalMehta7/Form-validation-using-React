import React from "react";
import cardCSS from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${cardCSS.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
