import axios from "axios";
import { endpoints } from "../server/server";

const creqEditProduct = (
  userId,
  productId,
  product,
  value,
  amount,
  comment,
  token
) => {
  return axios.post(
    endpoints.creqEditProductURL,
    {
      userId: userId,
      productId: productId,
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

export default creqEditProduct;
