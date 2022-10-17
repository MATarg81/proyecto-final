import handleCart from "./handleCart";
import activitiesReducer from "./activitiesReducer"
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  handleCart,
  activitiesReducer,
});

export default rootReducers;
