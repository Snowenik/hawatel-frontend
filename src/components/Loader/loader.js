import React from "react";
import styles from "../Loader/Loader.module.css";
import CircleLoader from "react-spinners/CircleLoader";

export const Loader = (props) => {
  return (
    <div className={styles.loaderContainer}>
      <CircleLoader
        color={props.color}
        loading={props.loading}
        size={props.size}
      />
    </div>
  );
};
