import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AppNavbar from "./components/navbar";
import Anime from "./components/anime";
import CardContainer from "./components/cardContainer";
import Info from "./components/info";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppNavbar />
          <Info />
          <ToastContainer />
          <main className="container h-100">
            <Switch>
              <Route exact path="/anime" component={Anime} />
              <CardContainer />
              <Route exact path="/" component={Animes} />
              {/* <Redirect to="/not-found"/> */}
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
