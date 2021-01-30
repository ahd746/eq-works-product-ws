import { put, call } from "redux-saga/effects";
import * as types from "../../redux/types";
import { requestGetPoi } from "../requests/poi";

export function* handleGetPoi(action) {
  try {
    const { data } = yield call(requestGetPoi);
    yield put({ type: types.POI, payload: data });
  } catch (error) {
    console.log(error);
  }
}

export function* handleSearchedPoi(action) {
  try {
    const search = action.payload;
    let { data } = yield call(requestGetPoi);
    data = data.filter(
      (branche) =>
        branche.name.toLowerCase().includes(search.toLowerCase()) ||
        branche.lat.toString().includes(search) ||
        branche.lon.toString().includes(search)
    );
    yield put({ type: types.SEARCH, payload: data });
  } catch (error) {
    console.log(error);
  }
}
