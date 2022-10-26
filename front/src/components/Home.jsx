import React from "react";
import Carousel from "./Carousel";

function Home() {
  return (
    <div
      className="d-flex justify-content-center" /* style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} */
    >
      <div className="d-flex p-2">
        <iframe
          title="Instagram"
          className="embed-responsive-item"
          src="https://www.instagram.com/athenasclub22/"
        ></iframe>
      </div>

      <div>
        <Carousel />
      </div>

      <div className="d-flex p-2">
        <iframe
          title="Facebook"
          className="embed-responsive-item"
          src="https://www.facebook.com/profile.php?id=100086986148643"
        ></iframe>
      </div>
    </div>
  );
}

export default Home;
