import * as types from "../types";
const events = (events = [], action) => {
  switch (action.type) {
    case types.EVENTS_DAILY:
      return action.payload;
    case types.EVENTS_HOURLY:
      return action.payload;
    default:
      return events;
  }
};
export default events;
