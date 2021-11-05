import axios from "axios";
import { endpoints } from "../server/server";

const creqGetProduct = (productId, token) => {
  return axios.post(
    endpoints.creqGetProductURL,
    {
      productId: productId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default creqGetProduct;
