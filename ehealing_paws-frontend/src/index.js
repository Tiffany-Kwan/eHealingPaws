import React from "react";
import { render } from "react-dom";
import App from "./modules/App";
import { Router, Route, hashHistory } from "react-router";
import About from "./modules/About";
import Repos from "./modules/Repos";

render(
  <Router history={hashHistory}>
    <Route path="/" compont={App} />
    <Route path="/repos" compont={Repos} />
    <Route path="/about" compont={About} />
  </Router>,
  document.getElementById("app")
);
