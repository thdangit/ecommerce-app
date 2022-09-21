import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Home from "../pages/Home";
import DetailProductInCart from "../components/Product/DetailProductInCart";
import DetailProduct from "../components/Product/DetailProduct";
import BlogPage from "../pages/BlogPage";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Shope from "../pages/Shope";

const Routes = () => {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/cart/:id">
            <DetailProductInCart />
          </Route>
          <Route path="/product/:id">
            <DetailProduct />
          </Route>
          <Route path="/shop">
            <Shope />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/blog">
            <BlogPage />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default Routes;
