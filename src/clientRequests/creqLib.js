import creqLogin from "../clientRequests/creqLogin";
import creqAuthenticate from "../clientRequests/creqAuthenticate";
import creqLoadProducts from "../clientRequests/creqLoadProducts";
import creqAddProduct from "../clientRequests/creqAddProduct";
import creqDeleteProduct from "../clientRequests/creqDeleteProduct";
import creqEditProduct from "../clientRequests/creqEditProduct";
import creqGetProduct from "../clientRequests/creqGetProduct";

const creqLib = {
  creqLogin: creqLogin,
  creqAuthenticate: creqAuthenticate,
  creqLoadProducts: creqLoadProducts,
  creqAddProduct: creqAddProduct,
  creqDeleteProduct: creqDeleteProduct,
  creqEditProduct: creqEditProduct,
  creqGetProduct: creqGetProduct,
};

export default creqLib;
