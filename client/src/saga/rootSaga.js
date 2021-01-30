import { all, takeLatest } from "redux-saga/effects";
import { handleGetDailyEvents, handleGetHourlyEvents } from "./handlers/events";
import { handleGetDailyStats, handleGetHourlyStats } from "./handlers/stats";
import { handleGetPoi, handleSearchedPoi } from "./handlers/poi";
import { handleGetHome } from "./handlers/home";
import * as types from "../redux/types";

export default function* rootSaga() {
  yield all([
    yield takeLatest(types.EVENTS_DAILY_SAGA, handleGetDailyEvents),
    yield takeLatest(types.EVENTS_HOURLY_SAGA, handleGetHourlyEvents),
    yield takeLatest(types.STATS_DAILY_SAGA, handleGetDailyStats),
    yield takeLatest(types.STATS_HOURLY_SAGA, handleGetHourlyStats),
    yield takeLatest(types.POI_SAGA, handleGetPoi),
    yield takeLatest(types.SEARCH_SAGA, handleSearchedPoi),
    yield takeLatest(types.HOME_SAGA, handleGetHome),
  ]);
}
