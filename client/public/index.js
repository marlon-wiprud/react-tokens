import React from "react";
import ReactDOM from "react-dom";
import App from "../src/app";
import { Provider } from "react-redux";
import store from "../src/store.js";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
