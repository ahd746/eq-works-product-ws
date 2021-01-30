import * as types from "../types";
const home = (home = [], action) => {
  switch (action.type) {
    case types.HOME:
      return action.payload;
    default:
      return home;
  }
};
export default home;
