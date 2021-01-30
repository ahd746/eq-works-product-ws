import * as types from "../types";

export const getPoi = () => ({ type: types.POI_SAGA });

export const getSearchedPoi = (search) => ({
  type: types.SEARCH_SAGA,
  payload: search,
});
