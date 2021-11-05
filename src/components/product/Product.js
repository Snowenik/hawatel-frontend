import React, { useState } from "react";
import styles from "../product/Product.module.css";
import { Loader } from "../Loader/loader";
import creqLib from "../../clientRequests/creqLib";
import { useHistory } from "react-router-dom";

export const Product = (props) => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const onEdit = () => {
    setLoading(true);
    creqLib
      .creqGetProduct(props.id, localStorage.getItem("jwt"))
      .then((response) => {
        setLoading(false);
        localStorage.setItem("editProduct", JSON.stringify(response.data));
        props.setEditProductId(props.id);
        props.setShowEdit(true);
      });
  };

  const onDelete = () => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    creqLib
      .creqDeleteProduct(user.id, props.id, localStorage.getItem("jwt"))
      .then((response) => {
        props.setMessage(response.data);
        setLoading(false);
        props.setShowSuccess(true);
        creqLib.creqLoadProducts().then((response) => {
          setTimeout(() => {
            props.setShowSuccess(false);
            history.push("/");
            props.setData(response.data);
          }, 2000);
        });
      });
  };

  return (
    <div className={styles.container}>
      <Loader color="#000000" loading={loading} size={15} />
      <div className={styles.infoContainer}>
        <div>
          <p>Id: {props.id}</p>
        </div>
        <div>
          <p>Produkt: {props.product}</p>
        </div>
        <div>
          <p>Cena: {props.value}zl</p>
        </div>
        <div>
          <p>Ilosc: {props.amount}</p>
        </div>
        <div>
          <p>Komentarz: {props.comment}</p>
        </div>
      </div>
      <div className={styles.operationContainer}>
        {localStorage.getItem("loggedIn") &&
        props.userId === JSON.parse(localStorage.getItem("user")).id ? (
          <>
            <div className={styles.deleteButton}>
              <button onClick={onDelete}>Usun</button>
            </div>
            <div className={styles.editButton}>
              <button onClick={onEdit}>Edytuj</button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
