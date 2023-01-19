import React from "react";
import bttnCss from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={bttnCss.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
