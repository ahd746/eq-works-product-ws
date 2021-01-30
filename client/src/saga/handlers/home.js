import { put, call } from "redux-saga/effects";
import * as types from "../../redux/types";
import { requestGetHome } from "../requests/home";

export function* handleGetHome(action) {
  try {
    const { data } = yield call(requestGetHome);
    yield put({ type: types.HOME, payload: data });
  } catch (error) {
    console.log(error);
  }
}
