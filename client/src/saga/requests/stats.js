import axios from "axios";

export const requestGetDailyStats = () => {
  return axios.get("https://eq-works-product-ws.herokuapp.com/stats/daily");
};

export const requestGetHourlyStats = () => {
  return axios.get("https://eq-works-product-ws.herokuapp.com/stats/hourly");
};
