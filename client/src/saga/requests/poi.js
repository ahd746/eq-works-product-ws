import axios from "axios";

export const requestGetPoi = () => {
  return axios.get("https://eq-works-product-ws.herokuapp.com/poi");
};
