import React from "react";
import Carousel from "./Carousel";
// import Footer from "./Footer";

function Home() {
  return (
    <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <hr />
      <Carousel />
      <hr />
      
    </div>
  );
}

export default Home;
