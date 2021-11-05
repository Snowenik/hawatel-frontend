import React, { useState } from "react";
import styles from "../modalAddProduct/ModalAddProduct.module.css";
import creqLib from "../../clientRequests/creqLib";
import { Loader } from "../Loader/loader";
import { useHistory } from "react-router-dom";

export const ModalAddProduct = (props) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState("");
  const [value, setValue] = useState(0);
  const [amount, setAmount] = useState(1);
  const [comment, setComment] = useState("");

  const history = useHistory();

  if (!props.showModal) {
    return null;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    creqLib
      .creqAddProduct(
        user.id,
        product,
        value,
        amount,
        comment,
        localStorage.getItem("jwt")
      )
      .then((response) => {
        props.setMessage(response.data);
        setLoading(false);
        props.setShowSuccess(true);
        creqLib.creqLoadProducts().then((response) => {
          setTimeout(() => {
            props.setShowSuccess(false);
            props.setShowModal(false);
            history.push("/");
            props.setData(response.data);
          }, 2000);
        });
      });
  };

  const onProductChange = (e) => {
    setProduct(e.target.value);
  };

  const onValueChange = (e) => {
    setValue(e.target.value);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <Loader color="#000000" loading={loading} size={15} />
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <div>
            <label>Produkt:</label>
            <input
              type="text"
              value={product}
              onChange={onProductChange}
              autoFocus
            />
          </div>
          <div>
            <label>Cena:</label>
            <input type="number" value={value} onChange={onValueChange} />
          </div>
          <div>
            <label>Ilosc:</label>
            <input type="number" value={amount} onChange={onAmountChange} />
          </div>
          <div>
            <label>Komentarz</label>
            <input type="text" value={comment} onChange={onCommentChange} />
          </div>
          <div className={styles.closeButton}>
            <button onClick={() => props.setShowModal(false)}>X</button>
          </div>
          <div>
            <input type="submit" value="Dodaj" />
          </div>
        </div>
      </div>
    </form>
  );
};
