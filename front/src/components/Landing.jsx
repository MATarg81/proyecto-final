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
              class="rounded"
              height="315"
              src="https://www.youtube.com/embed/iI-od-q_0Dw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <img src="" alt="" id="main-image" />
            <img
              src="/img/pibes club3.jpg"
              alt="pibes"
              height="275px"
              class="rounded"
            />
          </div>
          <div className="col-md-6 text-center  m-0">
            <div class="shadow p-3 mb-5 bg-body rounded" style={{backgroundColor:"indigo"}}>
              <h1 className="font-weight-bolder display-6">Club Athenas</h1>
              <p>
                El Club Athenas es una institución que actúa, fomenta y desarrolla
                actividades socio-culturales y deportivas.
              </p>
              <p>Desde 1977</p>

              <Link to="/home">
                <button
                  className="btn btn-outline-dark rounded-pill text-white border-white "
                  style={{ backgroundColor: "indigo" }}                  
                >
                  Entrar
                </button>
              </Link>

            </div>

            <div className="d-flex flex-column shadow p-3 mb-5 bg-body rounded">
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
