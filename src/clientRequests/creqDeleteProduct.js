import axios from "axios";
import { endpoints } from "../server/server";

const creqDeleteProduct = (userId, productId, token) => {
  return axios.post(
    endpoints.creqDeleteProductURL,
    {
      userId: userId,
      productId: productId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default creqDeleteProduct;
