import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {useAuth0} from '@auth0/auth0-react';

function NavBar() {
  const state = useSelector((state) => state.handleCart);
  const {loginWithRedirect} = useAuth0();

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light py-3">
        <div className="container">
          <img src="/img/sport-logo-free-vector.jpg" alt="Logo" height="80px" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tienda">
                  Tienda
                </Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link" to="/actividades">
                  Actividades
                </Link>
              </li>
  
              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>
            </ul>
            <div className="buttons">
              <Link to="/ingreso" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i>Ingresar
              </Link>
              {/* <Link to="/registro" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Registrarse
              </Link> */}
              <button className="btn btn-outline-dark ms-2" onClick={() => loginWithRedirect()}> <i className="fa fa-user-plus me-1"></i>RegistrarseRegistrarse</button>
              <Link to="/carrito" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Carrito (
                {state.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
