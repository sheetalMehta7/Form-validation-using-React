import React from "react";
import ReactDOM from "react-dom";
import errorCss from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
import Wrapper from "../Helper/Wrapper";

const Backdrop = (props) => {
  return <div className={errorCss.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={errorCss.modal}>
      <header className={errorCss.header}>
        <h2>{props.errorGenerated.title}</h2>
      </header>
      <div className={errorCss.content}>
        <p>{props.errorGenerated.message}</p>
      </div>
      <footer className={errorCss.actions}>
        <Button onClick={props.onConfirm}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Backdrop backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorGenerated={props.errorGenerated}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </Wrapper>
  );
};

export default ErrorModal;
