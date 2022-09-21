import React from "react";
import Hero from "../components/Home/Hero";
import Card from "../components/Home/Card";
import Product from "../components/Product/Product";
import Banner from "../components/Home/Banner";
import TopProduct from "../components/Product/TopProduct";
import Price from "../components/Home/Price";
import Testimonial from "../components/Home/Testimonial";
import Blog from "../components/Home/Blog";

function Home() {
  return (
    <div>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Price />
      <Testimonial />
      <Blog />
    </div>
  );
}

export default Home;
