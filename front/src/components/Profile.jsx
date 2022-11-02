import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import generica from "../imagesTeam/Santi.png";
import {
  get_roles,
  get_users,
  get_users_by_id,
} from "../redux/actionsCreator/usersActions";
import ProfileProducts from "./ProfileProducts";
//import { useAuth0 } from '@auth0/auth0-react'; LO DEJO COMENTADO PERO ENTIENDO QUE LO VAMOS A USAR CUANDO ESTE TODO OK

export default function Perfil() {
  //NO DEBERIA GUARDARME EN UNA CONSTANTE UN ESTADO DONDE ESTE LA DATA DEL USUARIO¿¿
  const usersState = useSelector((state) => state.usersReducer.usersById);
  const roles = useSelector((state) => state.usersReducer.roles);
  const allUsers = useSelector((state) => state.usersReducer.users);
  const dispatch = useDispatch();

  useEffect(() => {
    if (allUsers?.length === 0) {
      dispatch(get_users());
    }
    if (roles?.length === 0) {
      dispatch(get_roles());
    }
    if (usersState?.length === 0) {
      dispatch(get_users_by_id(7));
    }
  }, [dispatch, allUsers, roles, usersState]);
  /*
  className="d-flex justify-content-between nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical"
  */

  return (
    <div class="container-fluid">
      <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
          <div
            class="d-flex flex-column justify-content-between align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 nav-pills me-3"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              href="/"
              class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none"
            >
              <span class="fs-5 d-none d-sm-inline">Menu</span>
            </a>

            <ul
              class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <label class="nav-link align-middle px-0">
                  <button
                    className="btn btn-outline-dark"
                    id="v-pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-profile"
                    aria-selected="true"
                  >
                    Perfil
                  </button>
                </label>
              </li>

              <li>
                <label class="nav-link align-middle px-0">
                  <button
                    className="btn btn-outline-dark"
                    id="v-pills-activities-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-activities"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-activities"
                    aria-selected="true"
                  >
                    Actividades
                  </button>
                </label>
              </li>

              <li id="Historial de compras">
                <label class="nav-link align-middle px-0">
                  <button
                    className="btn btn-outline-dark"
                    id="v-pills-history-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-history"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-history"
                    aria-selected="true"
                  >
                    Historial de compras
                  </button>
                </label>
              </li>

              <li id="Usuarios">
                <label class="nav-link align-middle px-0">
                  <button
                    className="btn btn-outline-dark"
                    id="v-pills-users-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-users"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-users"
                    aria-selected="true"
                  >
                    Usuarios
                  </button>
                </label>
              </li>


              

              <li id="Productos">
                <label class="nav-link align-middle px-0">
                  <button
                    className="btn btn-outline-dark"
                    id="v-pills-products-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-products"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-products"
                    aria-selected="true"
                  >
                    Productos
                  </button>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content" id="v-pills-tabContent">

          {/* Profile */}
          <div
            class="col py-3 tab-pane fade show active"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabIndex="0"
          >
            <div>
              <img src={generica} alt="generica" />
            </div>
            <div>
              <h3> Nombre completo: </h3>
              <h2>
                {usersState?.name} {usersState?.lastname}
              </h2>
            </div>
            <div>
              <h3> Email: </h3>
              <h2>{usersState?.email}</h2>
            </div>
            <div>
              <h3> Fecha de nacimiento: </h3>
              <h2>{usersState?.dateOfBirth}</h2>
            </div>
            <div>
              <h3> Télefono: </h3>
              <h2>{usersState?.phoneNumber}</h2>
            </div>
            <div>
              <h3> Dirección: </h3>
              <h2>{usersState?.address}</h2>
            </div>
            <div>
              <h3> postalCode: </h3>
              <h2>{usersState?.postalCode}</h2>
            </div>
          </div>

          {/* Products */}
          <div
            class="tab-pane fade"
            id="v-pills-products"
            role="tabpanel"
            aria-labelledby="v-pills-products-tab"
            tabIndex="0"
          >
            <ProfileProducts />
          </div>

          
        </div>
      </div>
    </div>
  );
}
