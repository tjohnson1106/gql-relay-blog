import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch } from "react-router-dom";

import "./index.css";
import App from "./App";
import CreatePost from "./components/CreatePost";
import Login from "./components/login";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App path="/" exact={true} />
      <CreatePost path="/create-post" exact={true} />
      <Login path="/logion" exact={true} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
