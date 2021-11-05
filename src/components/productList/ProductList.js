import React from "react";
import styles from "../productList/ProductList.module.css";
import { Product } from "../product/Product";

export const ProductList = (props) => {
  return (
    <div className={styles.container}>
      {props.products.map((item, i) => (
        <Product
          key={i}
          id={item.id}
          userId={item.user.id}
          product={item.product}
          value={item.value}
          amount={item.amount}
          comment={item.comment}
          setShowEdit={props.setShowEdit}
          setShowSuccess={props.setShowSuccess}
          setMessage={props.setMessage}
          setData={props.setData}
          setEditProductId={props.setEditProductId}
        />
      ))}
    </div>
  );
};
