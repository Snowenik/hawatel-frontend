export const port = 8080;

export const baseURL = `http://localhost:${port}/api`;

export const endpoints = {
  creqLoginURL: baseURL + "/users/login",
  creqAuthenticateURL: baseURL + "/users/authenticate",
  creqLoadProductsURL: baseURL + "/products/loadProducts",
  creqAddProductURL: baseURL + "/products/addProduct",
  creqDeleteProductURL: baseURL + "/products/deleteProduct",
  creqEditProductURL: baseURL + "/products/editProduct",
  creqGetProductURL: baseURL + "/products/getProduct",
};
