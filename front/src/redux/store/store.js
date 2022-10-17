import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducers from "../reducer";

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);


export default store;


