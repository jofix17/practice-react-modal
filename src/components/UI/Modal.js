import React from "react";
import Button from "./Button";
import Card from "./Card";
import styles from "./Modal.module.css";

const Modal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onConfirm}/>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>{props.message}</div>
        <footer className={styles.actions}>
          <Button onClick={props.onConfirm} >Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
