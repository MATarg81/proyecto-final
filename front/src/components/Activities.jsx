import React from "react";
import { useEffect } from "react";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  getActivityById,
} from "../redux/actions/activitiesActions";
import {
  get_users,
  get_roles,
  get_users_by_id,
} from "../redux/actionsCreator/usersActions";
import { addUserActivity } from "../redux/actionsCreator/registerActivityActions";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login/LoginButton";
import Loading from "./Loading";

export default function Activities() {
  const allActivities = useSelector(
    (state) => state.activitiesReducer.activities
  );
  const activity = useSelector((state) => state.activitiesReducer.activityId);
  const usersState = useSelector((state) => state.usersReducer.usersById);
  const roles = useSelector((state) => state.usersReducer.roles);
  const allUsers = useSelector((state) => state.usersReducer.users);
  const register = useSelector(
    (state) => state.registerActivityReducer.registerActivity
  );

  const { isAuthenticated, user } = useAuth0();

  //hola

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Add activities to a user - Register in an activity

  useEffect(() => {
    dispatch(getActivities());
    dispatch(getActivityById(activity));
    dispatch(get_users());
  }, [dispatch]);

  //editProfile

  //User
  useEffect(() => {
    if (roles?.length === 0) {
      dispatch(get_roles());
    }
    if (allUsers?.length === 0) {
      dispatch(get_users());
    }
  }, [dispatch, allUsers, usersState, roles]);

  const findUser = user ? allUsers?.find((u) => u.email === user.email) : null;

  useEffect(() => {
    if (usersState?.length === 0) {
      dispatch(get_users_by_id(findUser?.id));
    }
  }, [dispatch, findUser, usersState]);

  function handleAddtoAct(activity) {
    if (!findUser) {
      return (
        <>
          {/* <div className="col-auto">
                  <button type="button" className="btn btn-outline-light mb-4 rounded-pill" data-bs-toggle="modal" data-bs-target="#myModal">
                    Suscribirse
                  </button>
                </div>
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
      </div> */}
        </>
      );
    }
    if (findUser) {
      const findReg = register.find((a) => a.id === activity.id);
      if (findReg) {
        alert("El usuario ya esta registrado");
      } else {
        dispatch(addUserActivity(activity, findUser.id));
        alert("Usuario registrado");
      }
    }
  }

  return (
    <div>
      <div>
        <div className="container p-3">
          <div className="row">
            <div className="col shadow p-3 mb-5 bg-body rounded">
              <h3 className="">Actividades del Club</h3>
              <p className="mb-0 ">
                En esta seccion usted podrá informarse de todas las actividades
                que el club tiene disponible, como así también los días,
                horarios y lugar donde se realizan.{" "}
              </p>
            </div>
            <div className="col">
              <img
                class="shadow pl-3 ml-5 bg-body rounded"
                src="/img/Natacion.jpg"
                alt="campeones2"
                style={{ width: "280px" }}
              />
            </div>

            <div className="col">
              <img
                class="shadow pl-3 mb-5 bg-body rounded"
                src="/img/inf_camp.jpg"
                alt="campeones"
                style={{ width: "300px" }}
              />
            </div>
          </div>
        </div>
        <div>
          <Link to="/inscriptos">
            {" "}
            <button
              type="button"
              className="btn btn-outline-dark rounded-pill text-white border-white p-1 mb-3"
              style={{ backgroundColor: "indigo" }}
            >
              Usuarios inscriptos
            </button>{" "}
          </Link>
        </div>

        <div
          className="container animate__animated animate__fadeInUp"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "3rem",
            margin: "2rem",
          }}
        >
          {allActivities ? (
            allActivities.map((a, index) => {
              return (
                <div
                  className="card product-item border-0 shadow p-3 mb-5 bg-body rounded text-center"
                  key={index}
                >
                  <div className="card-header product-img position-relative overflow-hidden bg-transparent border border-color p-0 h-100">
                    <img
                      src={a.img}
                      style={{ height: "250px", width: "100%" }}
                      className="card-img-top"
                      alt="..."
                    />
                    <div
                      className="card-body h-100"
                      style={{
                        backgroundColor: "rgb(223, 213, 223)",
                        padding: "0px",
                      }}
                    >
                      <h5 className="card-title">{a.name}</h5>
                      <p className="card-text">{a.detail}</p>
                      <div class="d-flex flex-row justify-content-around">
                        <div class="">
                          <p className="card-text">
                            <small className="text-muted">
                              Días: {a.days}{" "}
                            </small>
                          </p>
                        </div>
                        <div>
                          <p className="">
                            <small className="text-muted">
                              Horario: {a.times}
                            </small>
                          </p>
                        </div>
                      </div>

                      {!findUser ? (
                        <div class="d-flex flex-column">
                          <div class="d-flex flex-column">
                            <button
                              type="button"
                              className="btn btn-outline-light mb-4 rounded-pill"
                              data-bs-toggle="modal"
                              data-bs-target="#inscriptionActivities"
                            >
                              Dejá tu reseña
                            </button>
                          </div>
                          <div
                            className="modal fade"
                            id="inscriptionActivities"
                          >
                            <div className="modal-dialog bg-white">
                              <div className="modal-dialog">
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h4 className="modal-title">Ingresar</h4>
                                    <button
                                      type="button"
                                      className="btn-close"
                                      data-bs-dismiss="modal"
                                    ></button>
                                  </div>
                                  <div className="modal-body">
                                    Por favor ingresá para inscribirte
                                  </div>
                                  <div className="modal-footer">
                                    <LoginButton />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <button
                          type="button"
                          className="btn btn-outline-light mb-4 rounded-pill d-flex flex-column"
                          onClick={() => handleAddtoAct(a.id)}
                        >
                          Inscribirse
                        </button>
                      )}

                      <div className="d-flex flex-column">
                        {!findUser ? (
                          <>
                            <button
                              type="button"
                              className="btn btn-outline-light mb-4 rounded-pill "
                              data-bs-toggle="modal"
                              data-bs-target="#inscriptionActivities"
                            >
                              Dejá tu reseña
                            </button>

                            <div
                              className="modal fade"
                              id="inscriptionActivities"
                            >
                              <div className="modal-dialog bg-white">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h4 className="modal-title">
                                        Inscripción
                                      </h4>
                                      <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                      ></button>
                                    </div>
                                    <div className="modal-body">
                                      Por favor ingresá para dejar tu reseña
                                    </div>
                                    <div className="modal-footer">
                                      <LoginButton />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        ) : (
                          <Link to="/crearCalificacion">
                            {" "}
                            <button
                              type="button"
                              className="btn btn-outline-light mb-4 rounded-pill"
                            >
                              Dejá tu reseña
                            </button>{" "}
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
