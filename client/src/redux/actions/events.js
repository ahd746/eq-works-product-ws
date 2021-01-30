import * as types from "../types";

export const getHourlyEvents = () => ({ type: types.EVENTS_HOURLY_SAGA });
export const getDailyEvents = () => ({ type: types.EVENTS_DAILY_SAGA });
