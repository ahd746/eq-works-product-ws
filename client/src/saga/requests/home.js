import axios from "axios";
export const requestGetHome = () => {
  return axios.get("https://eq-works-product-ws.herokuapp.com");
};
