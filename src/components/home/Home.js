import React, { useState, useEffect } from "react";
import { Navbar } from "../navbar/Navbar";
import { AddButton } from "../addButton/AddButton";
import { ProductList } from "../productList/ProductList";
import { ModalAddProduct } from "../modalAddProduct/ModalAddProduct";
import { ModalEditProduct } from "../modalEditProduct/ModalEditProduct";
import { ModalSuccess } from "../modalSuccess/modal";
import creqLib from "../../clientRequests/creqLib";
import { Loader } from "../Loader/loader";

export const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    creqLib.creqLoadProducts().then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }, []);

  const [showModal, setShowModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [message, setMessage] = useState("");
  const [editProductId, setEditProductId] = useState(0);

  if (loading) {
    return (
      <>
        <Navbar />
        <Loader color="#000000" loading={loading} size={15} />
      </>
    );
  }

  return (
    <>
      <Navbar />
      {localStorage.getItem("jwt") ? (
        <AddButton onClick={setShowModal} />
      ) : null}
      <ModalAddProduct
        showModal={showModal}
        setShowModal={setShowModal}
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        message={message}
        setMessage={setMessage}
        setData={setData}
      />
      {showEdit ? (
        <ModalEditProduct
          showEdit={showEdit}
          setShowEdit={setShowEdit}
          editProductId={editProductId}
          setShowSuccess={setShowSuccess}
          setMessage={setMessage}
          setData={setData}
        />
      ) : null}
      <ModalSuccess
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        message={message}
      />
      <ProductList
        products={data}
        setProducts={setData}
        setShowEdit={setShowEdit}
        setShowSuccess={setShowSuccess}
        setMessage={setMessage}
        setData={setData}
        setEditProductId={setEditProductId}
      />
    </>
  );
};
