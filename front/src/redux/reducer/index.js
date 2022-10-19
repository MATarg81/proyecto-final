import handleCart from "./handleCart";
import activitiesReducer from "./activitiesReducer";
import productsReducer from "./productsReducer"
import categoriesReducer from './categoriesReducer'
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  productsReducer,
  categoriesReducer,
  handleCart,
  activitiesReducer,
});

export default rootReducers;
