import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import allTechReducer from "./reducers/allTechReducer";
import allTechData from "./components/store/all-tech";

import { Provider } from "react-redux";

let store = createStore(allTechReducer, allTechData);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
