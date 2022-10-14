import React from "react";
import Carousel from "./Carousel";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <hr />
      <div>
        <Carousel />
      </div>
      <hr />
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
