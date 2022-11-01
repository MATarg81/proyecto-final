
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AuthenticationButton from "./Login/authentication-button";
import Profile from "./Login/Views/Profile";

function NavBar() {
  const state = useSelector((state) => state.cartReducer);

  return (
    <div>
      <nav
        className="navbar navbar-expand-md bg-light py-1 mr-0 "
        style={{
          margin: "0px",
          background:
            "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(191,173,183,1) 52%, rgba(255,173,182,1) 66%, rgba(255,255,255,1) 83%)",
        }}
      >
        <div className="container p-0 ">
          <Link to="/">
            <img
              src="/img/athenas_logo-removebg-preview.png"
              alt="Logo"
              height="80px"
            />
          </Link>
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
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
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

              {/* <li className="nav-item">
            <Link className="nav-link" to="/crearProducto">
              Crear Producto
            </Link>
          </li> */}

              <li className="nav-item">
                <Link className="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>

            </ul>
            <div className="buttons" >
          
              <AuthenticationButton />
              <Profile />

              <Link to="/carrito" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i>Carrito (
                {state.items?.length})
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;