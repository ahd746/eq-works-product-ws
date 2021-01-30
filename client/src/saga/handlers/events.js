import { put, call } from "redux-saga/effects";
import * as types from "../../redux/types";
import {
  requestGetDailyEvents,
  requestGetHourlyEvents,
} from "../requests/events";

export function* handleGetDailyEvents(action) {
  try {
    const { data } = yield call(requestGetDailyEvents);
    yield put({ type: types.EVENTS_DAILY, payload: data });
  } catch (error) {
    console.log(error);
  }
}
export function* handleGetHourlyEvents(action) {
  try {
    const { data } = yield call(requestGetHourlyEvents);
    yield put({ type: types.EVENTS_HOURLY, payload: data });
  } catch (error) {
    console.log(error);
  }
}
