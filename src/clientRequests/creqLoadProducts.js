import axios from "axios";
import { endpoints } from "../server/server";

const creqLoadProducts = () => {
  return axios.get(endpoints.creqLoadProductsURL);
};

export default creqLoadProducts;
