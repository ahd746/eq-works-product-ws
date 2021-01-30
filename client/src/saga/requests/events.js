import axios from "axios";

export const requestGetDailyEvents = () => {
  return axios.get("https://eq-works-product-ws.herokuapp.com/events/daily");
};

export const requestGetHourlyEvents = () => {
  return axios.get("https://eq-works-product-ws.herokuapp.com/events/hourly");
};
