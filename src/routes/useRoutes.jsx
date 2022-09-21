import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Home from "../pages/Home";

const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Routes;
