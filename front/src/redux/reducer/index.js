import handleCart from "./handleCart";
import activitiesReducer from "./activitiesReducer";
import productsReducer from "./productsReducer"
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  productsReducer,
  handleCart,
  activitiesReducer,
});

export default rootReducers;
