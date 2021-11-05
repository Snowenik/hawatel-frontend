import axios from "axios";
import { endpoints } from "../server/server";

const creqAuthenticate = (login, password) => {
  return axios.post(endpoints.creqAuthenticateURL, {
    login: login,
    password: password,
  });
};

export default creqAuthenticate;
