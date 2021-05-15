// Required files
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

Axios.defaults.baseURL = "http://localhost:8080";

// My Components
import HomeGuest from "./components/HomeGuest";

function Main() {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
