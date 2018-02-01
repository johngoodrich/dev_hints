import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import $ from "jquery";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { createStore } from "redux";
import allTechReducer from "./reducers/allTechReducer";
import allTechData from "./components/store/all-tech";
import { Provider } from "react-redux";

let store = createStore(allTechReducer, allTechData);

window.jQuery = $;
require("bootstrap/dist/js/bootstrap.min.js");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
