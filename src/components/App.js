import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./home/HomePage";
import Menu from "./menu/menu";
import AboutPage from "./about/AboutPage";
import FAQPage from "./faq/FAQPage";
import ViewHintsPage from "./hints/ViewHintsPage";

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Menu} />
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/hints" component={ViewHintsPage} />
    </div>
  </Router>
);

export default App;
