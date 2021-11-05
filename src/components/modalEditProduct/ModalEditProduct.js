import React, { useState, useEffect } from "react";
import styles from "../modalEditProduct/ModalEditProduct.module.css";
import { Loader } from "../Loader/loader";
import { useHistory } from "react-router-dom";
import creqLib from "../../clientRequests/creqLib";

export const ModalEditProduct = (props) => {
  const editProduct = JSON.parse(localStorage.getItem("editProduct"));

  useEffect(() => {
    setProduct(editProduct.product);
    setValue(editProduct.value);
    setAmount(editProduct.amount);
    setComment(editProduct.comment);
  });

  const [product, setProduct] = useState(editProduct.product);
  const [value, setValue] = useState(editProduct.value);
  const [amount, setAmount] = useState(editProduct.amount);
  const [comment, setComment] = useState(editProduct.comment);
  const [loading, setLoading] = useState(false);

  const history = useHistory();

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

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("user"));
    creqLib
      .creqEditProduct(
        user.id,
        props.editProductId,
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
            props.setShowEdit(false);
            history.push("/");
            props.setData(response.data);
          }, 2000);
        });
      });
  };

  if (!props.showEdit) {
    return null;
  }
  return (
    <form onSubmit={onSubmit}>
      <Loader color="#000000" loading={loading} size={15} />
      <div className={styles.modalContainer}>
        <div className={styles.modalContent}>
          <div>
            <label>Produkt:</label>
            <input
              type="text"
              onChange={onProductChange}
              value={product}
              autoFocus
            />
          </div>
          <div>
            <label>Cena:</label>
            <input type="number" onChange={onValueChange} value={value} />
          </div>
          <div>
            <label>Ilosc:</label>
            <input type="number" onChange={onAmountChange} value={amount} />
          </div>
          <div>
            <label>Komentarz</label>
            <input type="text" onChange={onCommentChange} value={comment} />
          </div>
          <div className={styles.closeButton}>
            <button onClick={() => props.setShowEdit(false)}>X</button>
          </div>
          <div>
            <input type="submit" value="Edytuj" />
          </div>
        </div>
      </div>
    </form>
  );
};
