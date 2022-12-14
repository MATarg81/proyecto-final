import cartReducer from "./cartReducer";
import activitiesReducer from "./activitiesReducer";
import productsReducer from "./productsReducer"
import categoriesReducer from './categoriesReducer'
import reviewsReducer from './reviewsReducer'
import favReducer from "./favReducer";
import usersReducer from "./usersReducer"
import registerActivityReducer from "./registerActivityReducer"

import { combineReducers } from "redux";

const rootReducers = combineReducers({
  productsReducer,
  categoriesReducer,
  cartReducer,
  activitiesReducer,
  reviewsReducer,
  favReducer,
  usersReducer,
  registerActivityReducer
});

export default rootReducers;
