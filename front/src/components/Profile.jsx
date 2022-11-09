import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import generica from "../imagesTeam/avatar7.png";
import {
  get_roles,
  get_users,
  get_users_by_id,
} from "../redux/actionsCreator/usersActions";
import ProfileProducts from "./ProfileProducts";
import PurchesesMaded from "./purchesesMaded/purchesesMaded";
import ProfileAllActivities from "./ProfileAllActivities";
import ProfileUsers from "./ProfileUsers";
import ProfileActivities from "./ProfileActivities";

import { useAuth0 } from '@auth0/auth0-react';
import EditProfile from "./EditProfile";

export default function Perfil() {
  const usersState = useSelector((state) => state.usersReducer.usersById);
  const roles = useSelector((state) => state.usersReducer.roles);
  const allUsers = useSelector((state) => state.usersReducer.users);
  const{ isAuthenticated, user } = useAuth0()

  const dispatch = useDispatch();

  useEffect(() => {
    if (roles?.length === 0) {
      dispatch(get_roles());
    }
    if (allUsers?.length === 0) {
      dispatch(get_users());
    }
  }, [dispatch, allUsers, usersState, roles]);

  const findUser =  user ? allUsers?.find( u => u.email === user.email) : null

  useEffect(() => {
    if (usersState?.length === 0) {
      dispatch(get_users_by_id(findUser?.id));
    }
  }, [dispatch, findUser, usersState])

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div
          className="col-auto col-md-3 col-xl-2 px-sm-2 pr-0 "
          style={{ backgroundColor: "Indigo" }}
        >
          <div
            className="d-flex flex-column justify-content-between align-items-center align-items-sm-start text-white nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical"
          >
            <a
              href="/"
              className="d-flex align-items-center mb-md-0 me-md-auto text-black text-decoration-none"
            >
              <span className="fs-5 d-none d-sm-inline text-white">Menu</span>
            </a>

            <ul
              className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
              id="menu"
            >
              <li>
                <label className="nav-link align-middle px-0 ">
                  <button
                    className="btn btn-outline-dark rounded-pill text-white border-white p-1"
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
                <label className="nav-link align-middle px-0 ">
                  <button
                    className="btn btn-outline-dark rounded-pill text-white border-white p-1"
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
                <label className="nav-link align-middle px-0">
                  <button
                    className="btn btn-outline-dark rounded-pill text-white border-white p-1"
                    id="v-pills-history-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-history"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-history"
                    aria-selected="true"
                  >
                    Historial de{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ color: "white" }}
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </button>
                </label>
              </li>

              {/* Admins only */}
              { findUser?.roleId === 2 &&
              <div>
              <li id="Usuarios">
                <label className="nav-link align-middle px-0">
                  <button
                    className="btn btn-outline-dark rounded-pill text-white border-white p-1"
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
                <label className="nav-link align-middle px-0">
                  <button
                    className="btn btn-outline-dark rounded-pill text-white border-white p-1"
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
              <li id="Actividades">
                <label className="nav-link align-middle px-0">
                  <button
                    className="btn btn-outline-dark rounded-pill text-white border-white p-1"
                    id="v-pills-allActivities-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#v-pills-allActivities"
                    type="button"
                    role="tab"
                    aria-controls="v-pills-allActivities"
                    aria-selected="true"
                  >
                    Actividades
                  </button>
                </label>
              </li>
              </div>
              }

            </ul>
          </div>
        </div>

        <div className="tab-content" id="v-pills-tabContent">
          <div
            className="col py-3 tab-pane fade show active"
            id="v-pills-profile"
            role="tabpanel"
            aria-labelledby="v-pills-profile-tab"
            tabIndex="0"
          >
            <section className="section about-section gray-bg" id="about">
              <div className="container">
                <div className="row align-items-center flex-row">
                  <div className="col-lg-6">
                    <div className="about-text go-to border border-5 rounded shadow-lg">
                      <h3 className="dark-color">
                        {" "}
                        {findUser?.name} {findUser?.lastname}
                      </h3>
                      <div className="row about-list">
                        <div className="col-md-6">
                          <div className="media">
                            <label
                              style={{ fontWeight: "bold", color: "Indigo" }}
                            >
                              Fecha de nacimiento
                            </label>
                            <p>{findUser?.dateOfBirth}</p>
                          </div>
                          <div className="media">
                            <label
                              style={{ fontWeight: "bold", color: "Indigo" }}
                            >
                              Domicilio
                            </label>
                            <p>{findUser?.address}</p>
                          </div>
                          <div className="media">
                            <label
                              style={{ fontWeight: "bold", color: "Indigo" }}
                            >
                              Codigo Postal
                            </label>
                            <p>{findUser?.postalCode}</p>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="media">
                            <label
                              style={{ fontWeight: "bold", color: "Indigo" }}
                            >
                              E-mail
                            </label>
                            <p>{findUser?.email}</p>
                          </div>
                          <div className="media">
                            <label
                              style={{ fontWeight: "bold", color: "Indigo" }}
                            >
                              Telefono
                            </label>
                            <p>{findUser?.phoneNumber}</p>
                          </div>
                          <div className="media">
                            <EditProfile />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-auto">
                    <div className="about-avatar" >
                      <img src={user?.picture ? user?.picture : findUser?.image} title="" alt="hjhj"/>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Profile */}

          {/* Products */}
          <div
            className="tab-pane fade"
            id="v-pills-products"
            role="tabpanel"
            aria-labelledby="v-pills-products-tab"
            tabIndex="0"
          >
            <ProfileProducts />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-allActivities"
            role="tabpanel"
            aria-labelledby="v-pills-allActivities-tab"
            tabIndex="0"
          >
            <ProfileAllActivities />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-activities"
            role="tabpanel"
            aria-labelledby="v-pills-activities-tab"
            tabIndex="0"
          >
            <ProfileActivities />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-users"
            role="tabpanel"
            aria-labelledby="v-pills-users-tab"
            tabIndex="0"
          >
            <ProfileUsers />
          </div>
          <div
            className="tab-pane fade"
            id="v-pills-history"
            role="tabpanel"
            aria-labelledby="v-pills-history-tab"
            tabIndex="0"
          >
            <PurchesesMaded />
          </div>
        </div>
      </div>
    </div>
  );
}
