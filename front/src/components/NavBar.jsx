import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import LoginButton from "./Login/LoginButton";
// import Profile from "./Login/Profile";
// import LogoutButton from "./Login/LogoutButton";
// import { useAuth0 } from "@auth0/auth0-react";

function NavBar() {
  const state = useSelector((state) => state.handleCart);
  // const { isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light py-1" style={{padding: "0px 0px 0px 0px"}} >
        <div class="container">
          <Link to="/">
            <img
              src="/img/athenas_logo.png"
              alt="Logo"
              height="80px"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">

                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/tienda">
                  Tienda
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/actividades">
                  Actividades
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/crearProducto">
                  Crear Producto
                </Link>
              </li>

              <li class="nav-item">
                <Link class="nav-link" to="/nosotros">
                  Nosotros
                </Link>
              </li>
            </ul>
            <div class="buttons">
              {/* <Link to="/ingreso" class="btn btn-outline-dark">
                <i class="fa fa-sign-in me-1"></i>Ingresar
              </Link> */}
              {/* <Link to="/registro" class="btn btn-outline-dark ms-2">
                <i class="fa fa-user-plus me-1"></i>Registrarse
              </Link>
              {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}

              {/* <Profile></Profile> */}
              <Link to="/carrito" class="btn btn-outline-dark ms-2">
                <i class="fa fa-shopping-cart me-1"></i>Carrito (
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
