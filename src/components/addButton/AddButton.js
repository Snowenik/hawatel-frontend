import React from "react";
import styles from "../addButton/Button.module.css";

export const AddButton = (props) => {
  return (
    <div className={styles.container}>
      <button onClick={() => props.onClick(true)}>Dodaj przedmiot</button>
    </div>
  );
};
