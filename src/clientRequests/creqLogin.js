import axios from "axios";
import { endpoints } from "../server/server";

const creqLogin = (login, password) => {
  return axios.post(endpoints.creqLoginURL, {
    login: login,
    password: password,
  });
};

export default creqLogin;
