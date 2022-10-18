import React from "react";
import { Link } from "react-router-dom";
//import { aboutTeam } from './AboutTeam';

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-1">
            <div className="row mt-1">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1">
                {/* <!-- Content --> */}
                <h6 className="text-capitalize fw-bold mb-1">
                  <i className="fas fa-gem me-3 text-secondary "></i>Dev Team
                </h6>
                <Link to="/aboutTeam" className="text-reset" >
                  <p>Equipo de desarrollo</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-sunglasses" viewBox="0 0 16 16">
                    <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
                  </svg>
                </Link>

              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-1">
                <h6 className="text-capitalize fw-bold mb-1">Sponsors</h6>
                <p>
                  <Link to="!#" className="text-reset">
                    Jugueterias Tío Mario
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-badge-tm" viewBox="0 0 16 16">
                      <path d="M5.295 11V5.995H7V5H2.403v.994h1.701V11h1.19zm3.397 0V7.01h.058l1.428 3.239h.773l1.42-3.24h.057V11H13.5V5.001h-1.2l-1.71 3.894h-.039l-1.71-3.894H7.634V11h1.06z" />
                      <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z" />
                    </svg>
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    YPF
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ev-station" viewBox="0 0 16 16">
                      <path d="M3.5 2a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5Zm2.131 10.46H4.14v-.893h1.403v-.505H4.14v-.855h1.49v-.54H3.485V13h2.146v-.54Zm1.316.54h.794l1.106-3.333h-.733l-.74 2.615h-.031l-.747-2.615h-.764L6.947 13Z" />
                      <path d="M3 0a2 2 0 0 0-2 2v13H.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1H11v-4a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 0 3 0V4a.5.5 0 0 0-.146-.354l-.5-.5a.5.5 0 0 0-.707 0l-.5.5A.5.5 0 0 0 13 4v3c0 .71.38 1.096.636 1.357l.007.008c.253.258.357.377.357.635v3.5a.5.5 0 1 1-1 0V12a2 2 0 0 0-2-2V2a2 2 0 0 0-2-2H3Zm7 2v13H2V2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z" />
                    </svg>
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    BicyShop
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bicycle" viewBox="0 0 16 16">
                      <path d="M4 4.5a.5.5 0 0 1 .5-.5H6a.5.5 0 0 1 0 1v.5h4.14l.386-1.158A.5.5 0 0 1 11 4h1a.5.5 0 0 1 0 1h-.64l-.311.935.807 1.29a3 3 0 1 1-.848.53l-.508-.812-2.076 3.322A.5.5 0 0 1 8 10.5H5.959a3 3 0 1 1-1.815-3.274L5 5.856V5h-.5a.5.5 0 0 1-.5-.5zm1.5 2.443-.508.814c.5.444.85 1.054.967 1.743h1.139L5.5 6.943zM8 9.057 9.598 6.5H6.402L8 9.057zM4.937 9.5a1.997 1.997 0 0 0-.487-.877l-.548.877h1.035zM3.603 8.092A2 2 0 1 0 4.937 10.5H3a.5.5 0 0 1-.424-.765l1.027-1.643zm7.947.53a2 2 0 1 0 .848-.53l1.026 1.643a.5.5 0 1 1-.848.53L11.55 8.623z" />
                    </svg>
                  </Link>
                </p>
              </div>
              {/*  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-1">
                <h6 className="text-uppercase fw-bold mb-1">Useful links</h6>
                <p>
                  <Link to="#!" className="text-reset">
                    Help
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Help
                  </Link>
                </p>
                <p>
                  <Link to="#!" className="text-reset">
                    Help
                  </Link>
                </p>
              </div> */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-1">
                <h6 className="text-capitalize fw-bold mb-1">Contacto</h6>
                <p>
                  <i className="fa fa-envelope me-3 text-secondary"></i>clubathenas@gmail.com
                </p>
                <p>
                  <i className="fa fa-phone me-3 text-secondary"></i>5423456789
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="d-flex justify-content-center justify-content-lg-center border-bottom">
          <div>
            <Link to="" className="me-4 link-secondary">
              <i className="fa fa-facebook-f"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fa fa-twitter"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fa fa-google"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fa fa-instagram"></i>
            </Link>
            {/* <Link to="" className="me-4 link-secondary">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fa fa-github"></i>
            </Link> */}
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
