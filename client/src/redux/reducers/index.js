import { combineReducers } from "redux";
import events from "./events";
import stats from "./stats";
import poi from "./poi";
import home from "./home";

const rootReducer = combineReducers({
  events,
  stats,
  poi,
  home,
});
export default rootReducer;
