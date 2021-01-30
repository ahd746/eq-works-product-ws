import * as types from "../types";
const stats = (stats = [], action) => {
  switch (action.type) {
    case types.STATS_DAILY:
      return action.payload;
    case types.STATS_HOURLY:
      return action.payload;
    default:
      return stats;
  }
};
export default stats;
