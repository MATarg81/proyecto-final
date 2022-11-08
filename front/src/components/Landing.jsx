import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <div className="container">
        <main className="row mb-4">
          <div className="col-md-6 text-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iI-od-q_0Dw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullscreen
            ></iframe>
            <img src="" alt="" id="main-image" />
            <img
              src="/img/pibes club3.jpg"
              alt="pibes"
              height="275px"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-6 text-center my-auto">
            <h1 className="font-weight-bolder">Club Athenas</h1>
            <p>
              El Club Athenas es una institución que actúa, fomenta y desarrolla
              actividades socio-culturales y deportivas.
            </p>
            <p>Desde 2022</p>

            <Link to="/home">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#352d39", borderColor: "white" }}
              >
                Entrar
              </button>
            </Link>

            <div className="d-flex flex-column">
              <div>
                <img
                  src="/img/athenas_logo-removebg-preview.png"
                  alt="Logo"
                  height="400px"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Landing;

//ff6978-fffcf9-b1ede8-6d435a-352d39
