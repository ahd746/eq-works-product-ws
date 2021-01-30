import * as types from "../types";

export const getHourlyStats = () => ({ type: types.STATS_HOURLY_SAGA });
export const getDailyStats = () => ({ type: types.STATS_DAILY_SAGA });
