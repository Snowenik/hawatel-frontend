import React, { useState } from "react";
import styles from "../login/Login.module.css";
import avatar from "../imgs/avatar.png";
import { useHistory } from "react-router-dom";
import creqLib from "../../clientRequests/creqLib";
import { ModalSuccess } from "../modalSuccess/modal";
import { Loader } from "../Loader/loader";

export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const history = useHistory();

  const onLoginChange = (e) => {
    setLogin(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    creqLib.creqLogin(login, password).then((response) => {
      setLoading(false);
      localStorage.setItem("user", JSON.stringify(response.data));
      creqLib.creqAuthenticate(login, password).then((response) => {
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("loggedIn", true);
        setMessage("Zalogowano pomyslnie, zostaniesz przekierowany");
        setShowSuccess(true);
        setTimeout(() => {
          history.push("/");
        }, 2000);
      });
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <ModalSuccess
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        message={message}
      />
      <Loader color="#000000" loading={loading} size={15} />
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <img src={avatar} alt="" />
        </div>
        <div className={styles.loginContainer}>
          <label>Login:</label>
          <input
            type="text"
            autoFocus
            required
            minLength="3"
            maxLength="20"
            value={login}
            onChange={onLoginChange}
          />
        </div>
        <div className={styles.passwordContainer}>
          <label>Haslo:</label>
          <input
            type="password"
            required
            minLength="3"
            maxLength="20"
            placeholder="min. 8 znakow"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
        <div>
          <input type="submit" value="Zaloguj" />
        </div>
      </div>
    </form>
  );
};
