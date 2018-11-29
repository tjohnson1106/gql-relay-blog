import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Switch } from "react-router-dom";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import CreatePost from "./components/CreatePost";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <App path="/" exact={true} />
      <CreatePost path="/create-post" exact={true} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
