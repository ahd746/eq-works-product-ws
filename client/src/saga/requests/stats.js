import axios from "axios";

export const requestGetDailyStats = () => {
  return axios.get("https://eqwork.glitch.me/stats/daily");
};

export const requestGetHourlyStats = () => {
  return axios.get("https://eqwork.glitch.me/stats/hourly");
};
