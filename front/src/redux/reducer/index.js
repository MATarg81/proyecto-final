import handleCart from "./handleCart";
import activitiesReducer from "./activitiesReducer";
import productsReducer from "./productsReducer"
import categoriesReducer from './categoriesReducer'
import reviewsReducer from './reviewsReducer'
import { combineReducers } from "redux";

const rootReducers = combineReducers({
  productsReducer,
  categoriesReducer,
  handleCart,
  activitiesReducer,
  reviewsReducer,
});

export default rootReducers;
