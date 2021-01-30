import * as types from "../types";
const poi = (poi = [], action) => {
  switch (action.type) {
    case types.POI:
      return action.payload;
    case types.SEARCH:
      return action.payload;
    default:
      return poi;
  }
};
export default poi;
