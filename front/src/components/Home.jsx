import React from "react";
import Carousel from "./Carousel";

function Home() {
  return (
    <div  class="d-flex justify-content-center" /* style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} */>

      <div class="d-flex p-2">
        <iframe class="embed-responsive-item" src="https://www.instagram.com/athenasclub22/"></iframe>
      </div>

      
      <div>
        <Carousel />
      </div>

      <div class="d-flex p-2">
        <iframe class="embed-responsive-item" src="https://www.facebook.com/profile.php?id=100086986148643"></iframe>
      </div>

      
    </div>
  );
}

export default Home;
