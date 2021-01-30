import axios from "axios";

export const requestGetPoi = () => {
  return axios.get("https://eqwork.glitch.me/poi");
};
