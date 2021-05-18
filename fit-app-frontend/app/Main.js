// Required files
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { BrowserRouter, Switch, Route } from "react-router-dom";

Axios.defaults.baseURL = "http://localhost:8080";

// My Components
import Header from "./components/Header";
import HomeGuest from "./components/HomeGuest";
import Home from "./components/Home";
import Footer from "./components/Footer";

function Main() {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("fitnessAppToken"))
  );

  return (
    <BrowserRouter>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Switch>
        <Route path="/" exact>
          {loggedIn ? <Home /> : <HomeGuest />}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
