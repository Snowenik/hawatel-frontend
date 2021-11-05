import axios from "axios";
import { endpoints } from "../server/server";

const creqAddProduct = (userId, product, value, amount, comment, token) => {
  return axios.post(
    endpoints.creqAddProductURL,
    {
      userId: userId,
      product: product,
      value: value,
      amount: amount,
      comment: comment,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default creqAddProduct;
