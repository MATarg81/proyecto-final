import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../redux/actions/activitiesActions";
import {
  get_users,
  get_roles,
  get_users_by_id,
} from "../redux/actionsCreator/usersActions";
import { addUserActivity } from "../redux/actionsCreator/registerActivityActions";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login/LoginButton";

export default function Activities() {
  const allActivities = useSelector(
    (state) => state.activitiesReducer.activities
  );
  const usersState = useSelector((state) => state.usersReducer.usersById);
  const roles = useSelector((state) => state.usersReducer.roles);
  const allUsers = useSelector((state) => state.usersReducer.users);
  const register = useSelector(
    (state) => state.registerActivityReducer.registerActivity
  );
  const { isAuthenticated, user } = useAuth0();

  //hola

  const dispatch = useDispatch();

  // Add activities to a user - Register in an activity

  useEffect(() => {
    dispatch(getActivities());
    dispatch(get_users());
  }, [dispatch]);

  //User
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

  const findUser = user ? allUsers?.find((u) => u.email === user.email) : null;

  function handleAddtoAct(activities) {
    if (!findUser) {
      return (
        <>
          {/* <div className="col-auto">
                  <button type="button" class="btn btn-outline-light mb-4 rounded-pill" data-bs-toggle="modal" data-bs-target="#myModal">
                    Suscribirse
                  </button>
                </div>
      <div class="modal" id="myModal">
        <div class="modal-dialog bg-white">
          <div class="modal-header">
            <h4 class="modal-title">Gracias por suscribirte!</h4>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            Todos los días sabados recibiras un email con todas las novedades del club.
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cerrar</button>
          </div>
        </div>
      </div> */}
        </>
      );
    }
    if (usersState) {
      const findReg = register.find((a) => a.id === activities.id);
      if (findReg) {
        alert("El usuario ya esta registrado");
      } else {
        dispatch(addUserActivity(activities, usersState.id));
        alert("Usuario registrado");
      }
    }
  }

  return (
    <div>
      <div className="container p-3">
        <div className="row">
          <div className="col shadow p-3 mb-5 bg-body rounded">
            <h3 className="">Actividades del Club</h3>
            <p className="mb-0 ">
              En esta seccion usted podra informarse de todas las actividades
              que el club tiene disponible tanto de los días y horarios como del
              lugar donde se realizan.{" "}
            </p>
          </div>
          <div className="col">
            <img
              class="shadow pl-3 ml-5 bg-body rounded"
              src="/img/natacion.jpg"
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

        <div></div>

        <div></div>
      </div>

      <div className=" row row-cols-1 row-cols-md-2 g-4 mx-5 p-4  animate__animated animate__backInUp" style={{ marginTop: "-55px" }}>
        {allActivities ? (
          allActivities.map((a, index) => {
            return (
              <div className="card product-item border-0 shadow p-3 mb-5 bg-body rounded" key={index}>
                <div
                  className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 h-100"

                >
                  <img
                    src={a.img}
                    style={{ height: "250px", width: "100%" }}
                    className="card-img-top"
                    alt="..."
                  />

                  <div
                    className="card-body h-100"
                    style={{
                      backgroundColor: "rgba(160, 160, 160, 0.788)",
                      padding: "0px",
                    }}
                  >
                    <h5 className="card-title">{a.name}</h5>
                    <p className="card-text">{a.detail}</p>
                    <div class="d-flex flex-row justify-content-around">

                      <div class="">
                        <p className="card-text">
                          <small className="text-muted">Días: {a.days} </small>
                        </p>
                      </div>
                      <div>
                        <p className="">
                          <small className="text-muted">Horario: {a.times}</small>
                        </p>
                      </div>
                    </div>

                    {!findUser ? (
                      <>
                      <div class="d-flex flex-column px-4">
                          <button
                            type="button"
                            class="btn btn-outline-light mb-4 rounded-pill"
                            data-bs-toggle="modal"
                            data-bs-target="#inscriptionActivities"
                          >
                            Ingresar
                          </button>
                      </div>
                        <div class="modal fade" id="inscriptionActivities">
                          <div class="modal-dialog bg-white">
                            <div class="modal-dialog">
                              <div class="modal-content">
                                <div class="modal-header">
                                  <h4 class="modal-title">Ingresar</h4>
                                  <button
                                    type="button"
                                    class="btn-close"
                                    data-bs-dismiss="modal"
                                  ></button>
                                </div>
                                <div class="modal-body">
                                  Por favor ingresa para inscribirte
                                </div>
                                <div class="modal-footer">
                                  <LoginButton />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => handleAddtoAct(a.id)}
                      >
                        Inscribirse
                      </button>
                    )}

                    <div className="d-flex flex-column px-4">
                      {!findUser ? (
                        <>
                          
                            <button
                              type="button"
                              class="btn btn-outline-light mb-4 rounded-pill"
                              data-bs-toggle="modal"
                              data-bs-target="#inscriptionActivities"
                            >
                              Deja tu reseña
                            </button>
                          <div class="modal fade" id="inscriptionActivities">
                            <div class="modal-dialog bg-white">
                              <div class="modal-dialog">
                                <div class="modal-content">
                                  <div class="modal-header">
                                    <h4 class="modal-title">Inscripción</h4>
                                    <button
                                      type="button"
                                      class="btn-close"
                                      data-bs-dismiss="modal"
                                    ></button>
                                  </div>
                                  <div class="modal-body">
                                    Por favor ingresa para dejar reseña
                                  </div>
                                  <div class="modal-footer">
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
                            className="btn btn-outline-dark ms-2"
                          >
                            Deja tu reseña
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
          <div>Loading Activities....</div>
        )}
      </div>
      <Link to="/inscriptos">
        {" "}
        <button type="button" className="btn btn-outline-dark ms-2">
          Usuarios inscriptos
        </button>{" "}
      </Link>
    </div>
  );
}


/* 

<div
          className="container animate__animated animate__fadeInUp"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "3rem",
            margin: "2rem",
          }}
        >
          {productsPage?.map((p, index) => (
            <div className="card product-item border-0" key={index}>
              <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 h-100 ">
                <div className="" onClick={() => navigate(`/tienda/${p.id}`)}>
                  <img
                    className="img-fluid hover-zoom bg-image"
                    src={p.image}
                    /* className="card-img-top" */ /* alt={p.name}
/>
</div>
</div>
<div className="card-body border-left border-right text-center">
<h6 className="text-truncate ">{p.name}</h6>
<div className="d-flex justify-content-center">
<h6>$ {p.price}</h6>
</div>
</div>
<div className="card-footer d-flex justify-content-between border text-primary">
<a
onClick={() => navigate(`/tienda/${p.id}`)}
className="btn btn-sm  p-0"
>
<i
data-toggle="tooltip"
data-placement="bottom"
title="Ver detalle"
>
<svg
xmlns="http://www.w3.org/2000/svg"
width="16"
height="16"
style={{ color: "indigo" }}
fill="currentColor"
className="bi bi-eye"
viewBox="0 0 16 16"
>
<path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
<path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
</svg>
</i>
</a>
<a onClick={() => addProduct(p)} className="btn btn-sm  p-0">
<i
data-toggle="tooltip"
data-placement="bottom"
title="Agregar al carrito"
>
<svg
xmlns="http://www.w3.org/2000/svg"
style={{ color: "indigo" }}
data-toggle="tooltip"
data-placement="bottom"
title="Agregar al carrito"
width="16"
height="16"
fill="currentColor"
className="bi bi-cart"
viewBox="0 0 16 16"
>
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
</svg>
</i>
</a>
<a onClick={() => handleAddtoFav(p)} className="btn btn-sm  p-0 ">
<i
data-toggle="tooltip"
data-placement="bottom"
title="Agregar a favoritos"
>
<svg
xmlns="http://www.w3.org/2000/svg"
width="16"
height="16"
fill={
stateOrLs.find((pr) => pr.id === p.id)
? "red"
: "currentColor"
}
className="bi bi-heart-fill"
viewBox="0 0 16 16"
>
<path
fillRule="evenodd"
d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
/>
</svg>
</i>
</a>
</div>
</div>
))}
</div>

*/