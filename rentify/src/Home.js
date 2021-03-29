import React from "react";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Product from "./Product";

function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <Product />
      <Footer />
    </div>
  );
}

export default Home;
