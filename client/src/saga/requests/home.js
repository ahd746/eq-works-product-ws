import axios from "axios";
export const requestGetHome = () => {
  return axios.get("https://eqwork.glitch.me/");
};
