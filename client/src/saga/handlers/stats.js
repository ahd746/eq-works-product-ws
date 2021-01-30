import { put, call } from "redux-saga/effects";
import * as types from "../../redux/types";
import { requestGetDailyStats, requestGetHourlyStats } from "../requests/stats";

export function* handleGetDailyStats(action) {
  try {
    const { data } = yield call(requestGetDailyStats);
    yield put({ type: types.STATS_DAILY, payload: data });
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetHourlyStats(action) {
  try {
    const { data } = yield call(requestGetHourlyStats);
    yield put({ type: types.STATS_HOURLY, payload: data });
  } catch (error) {
    console.log(error);
  }
}
