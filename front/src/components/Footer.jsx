import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer className="text-center text-lg-start bg-white text-muted">
        <section className="">
          <div className="container text-center text-md-start mt-1">
            <div className="row mt-1">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-1">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-1">
                  <i className="fas fa-gem me-3 text-secondary"></i>Dev Team
                </h6>
                <p>Algo sobre equipo de desarrollo?</p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-1">
                <h6 className="text-uppercase fw-bold mb-1">Algo o no</h6>
                <p>
                  <Link to="#!" className="text-reset">
                    React
                  </Link>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-1">
                <h6 className="text-uppercase fw-bold mb-1">Useful links</h6>
                <p>
                  <Link to="#!" className="text-reset">
                    Help
                  </Link>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-1">
                <h6 className="text-uppercase fw-bold mb-1">Contacto</h6>
                <p>
                  <i className="fa fa-home me-3 text-secondary"></i> Argentina
                </p>
                <p>
                  <i className="fa fa-envelope me-3 text-secondary"></i>
                  part07@example.com
                </p>
                <p>
                  <i className="fa fa-phone me-3 text-secondary"></i> + 54 234
                  567 89
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
            <Link to="" className="me-4 link-secondary">
              <i className="fa fa-linkedin"></i>
            </Link>
            <Link to="" className="me-4 link-secondary">
              <i className="fa fa-github"></i>
            </Link>
          </div>
        </section>
      </footer>
    </div>
  );
}

export default Footer;
