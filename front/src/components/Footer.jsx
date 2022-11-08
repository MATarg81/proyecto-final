import React from "react";
import { Link } from "react-router-dom";
//import { aboutTeam } from './AboutTeam';

function Footer() {
  return (
    <div style={{ background: "#352d39" }}>
      <footer
        className="text-center text-white"
        style={{ background: "Indigo" }}
      >
        <div className="container p-4" style={{ background: "Indigo" }}>
          <section className="">
            <form action="">
              <div className="row d-flex justify-content-center">
                <div className="col-auto">
                  <p className="pt-2">
                    <strong>
                      Registrate en nuestro newsletter para estar siempre
                      informado
                    </strong>
                  </p>
                </div>

                <div className="col-md-5 col-12">
                  <div className="form-outline form-white">
                    <input
                      type="email"
                      id="form5Example21"
                      className="form-control"
                    />
                    <label className="form-label m-0" htmlFor="form5Example21">
                      Dirección de email
                    </label>
                  </div>
                </div>

                <div className="col-auto">
                  <button type="button" className="btn btn-outline-light mb-4 rounded-pill" data-bs-toggle="modal" data-bs-target="#myModal">
                    Suscribirse
                  </button>
                </div>
              </div>
            </form>
          </section>

          <section className="">
            <div className="row d-flex justify-content-around">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-capitalize">dev.team</h5>

                <ul className="list-unstyled mb-0">
                  <Link to="/aboutTeam" className="text-reset">
                    <p>
                      Equipo de desarrollo
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-emoji-sunglasses"
                        viewBox="0 0 16 16"
                      >
                        <path d="M4.968 9.75a.5.5 0 1 0-.866.5A4.498 4.498 0 0 0 8 12.5a4.5 4.5 0 0 0 3.898-2.25.5.5 0 1 0-.866-.5A3.498 3.498 0 0 1 8 11.5a3.498 3.498 0 0 1-3.032-1.75zM7 5.116V5a1 1 0 0 0-1-1H3.28a1 1 0 0 0-.97 1.243l.311 1.242A2 2 0 0 0 4.561 8H5a2 2 0 0 0 1.994-1.839A2.99 2.99 0 0 1 8 6c.393 0 .74.064 1.006.161A2 2 0 0 0 11 8h.438a2 2 0 0 0 1.94-1.515l.311-1.242A1 1 0 0 0 12.72 4H10a1 1 0 0 0-1 1v.116A4.22 4.22 0 0 0 8 5c-.35 0-.69.04-1 .116z" />
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z" />
                      </svg>
                    </p>
                  </Link>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-capitalize">Sponsors</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="https://www.farmaciagomezmardelplata.com/" className="text-white">
                      Farmacia Gomez
                    </a>
                  </li>
                  <li>
                    <a href="https://www.bicyshop.com.ar/" className="text-white">
                      Bicyshop
                    </a>
                  </li>
                  <li>
                    <a href="https://www.tiomario.com/" className="text-white">
                      Jugueterias Tio Mario
                    </a>
                  </li>
                  <li>
                    <a href="https://www.ripsa.com.ar/" className="text-white">
                      Ripsa
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <h5 className="text-capitalize">Contacto</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      +54 2236589647
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      clubathenasatr@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Av. Domingo Faustino Trello 420
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ background: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <a className="text-white" href="https://www.soyhenry.com/">
            Henry
          </a>
        </div>
      </footer>



      <div className="modal" id="myModal">
        <div className="modal-dialog bg-white">
          <div className="modal-header">
            <h4 className="modal-title">Gracias por suscribirte!</h4>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            Todos los días sabados recibiras un email con todas las novedades del club.
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div>
    </div>









  );
}

export default Footer;
