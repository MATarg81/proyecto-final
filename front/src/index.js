import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import Auth0ProviderWithHistory from "./auth/auth0-provider-with-history";

import axios from "axios";


axios.defaults.baseURL = process.env.REACT_APP_API || "http://localhost:3001";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
  
          <Provider store={store}>
            <App />
          </Provider>
        
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
