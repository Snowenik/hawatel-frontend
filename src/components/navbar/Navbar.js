import React from "react";
import { Link } from "react-router-dom";
import styles from "../navbar/Navbar.module.css";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();

  const onLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.linkContainer}>
        {localStorage.getItem("jwt") ? (
          <button onClick={onLogout}>Wyloguj</button>
        ) : (
          <Link to="/login" className={styles.link}>
            Zaloguj
          </Link>
        )}
      </div>
    </div>
  );
};
