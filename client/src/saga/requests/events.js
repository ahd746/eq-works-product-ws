import axios from "axios";

export const requestGetDailyEvents = () => {
  return axios.get("https://eqwork.glitch.me/events/daily");
};

export const requestGetHourlyEvents = () => {
  return axios.get("https://eqwork.glitch.me/events/hourly");
};
