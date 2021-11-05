import React from "react";
import styles from "../modalSuccess/Modal.module.css";
import greenTick from "../imgs/greenTick.png";

export const ModalSuccess = (props) => {
  if (!props.showSuccess) {
    return null;
  }
  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.imgContainer}>
          <img src={greenTick} alt="" />
        </div>
        <div className={styles.messageContainer}>
          <p>{props.message}</p>
        </div>
        <div>
          <button onClick={() => props.setShowSuccess(false)}>Ok</button>
        </div>
      </div>
    </div>
  );
};
