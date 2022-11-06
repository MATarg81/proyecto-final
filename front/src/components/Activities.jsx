import React from "react";
// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  deleteActivity,
} from "../redux/actions/activitiesActions";
import { get_users } from "../redux/actionsCreator/usersActions";
import ReviewsCreate from "./ReviewsCreate";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";


export default function Activities() {
  const dispatch = useDispatch();
  const{ isAuthenticated,user } = useAuth0() 
  useEffect(() => {
    dispatch(getActivities());
    dispatch(get_users())
  }, [dispatch]);

  const stateUser = useSelector( state => state.usersReducer.users)
  const findUser =  user ? stateUser.find( u => u.email === user.email) : null

  const allActivities = useSelector(
    (state) => state.activitiesReducer.activities
  );

  function handleDeleteActivity(id) {
    if (window.confirm(`Are you sure you want to delete the activity?`)) {
      dispatch(deleteActivity(id));
    }
  }
  
  return (
    <div>
      <div className="container p-3">
        <div className="row">
          <div className="col">
            <h3 className="">Actividades del Club</h3>
            <p className="mb-0 ">
              En esta seccion usted podra informarse de todas las actividades
              que el club tiene disponible tanto de los días y horarios como del
              lugar donde se realizan.{" "}
            </p>
          </div>
          <div className="col">
            <img
              src="/img/natacion.jpg"
              alt="campeones2"
              style={{ width: "280px" }}
            />
          </div>

          <div className="col">
            <img
              src="/img/inf_camp.jpg"
              alt="campeones"
              style={{ width: "300px" }}
            />
          </div>
        </div>

        <div></div>

        <div></div>
      </div>

      <div
        className="d-flex flex-column px-4" /* style={{background: "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(191,173,183,1) 52%, rgba(255,173,182,1) 66%, rgba(255,255,255,1) 83%)"}} */
      >
        <Link to="/crearActividades">
          {" "}
          { findUser?.roleId === 2 &&
          <button type="button" className="btn btn-outline-dark ms-2">
            Crear Actividad
          </button>
          }
          {" "}
        </Link>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        {allActivities ? (
          allActivities.map((a) => {
            return (
              <div className="col" key={a.name}>
                <div
                  className="card h-100 m-2"
                  style={{
                    border: "1px solid black",
                  }}
                >
                  <img
                    src={a.img}
                    style={{ height: "250px", width: "100%" }}
                    className="card-img-top"
                    alt="..."
                  />

                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "rgba(160, 160, 160, 0.788)",
                      padding: "0px",
                    }}
                  >
                    <h5 className="card-title">{a.name}</h5>
                    <p className="card-text">{a.detail}</p>
                    <p className="card-text">
                      <small className="text-muted">Días: {a.days}</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Horario: {a.times}</small>
                    </p>
                    <button type="button" className="btn btn-secondary">
                      Inscribirse
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      style={{
                        width: "100px",
                        position: "absolute",
                        right: "4px",
                      }}
                      onClick={() => handleDeleteActivity(a.id)}
                    >
                      Delete X
                    </button>
                    <div
                      className="d-flex flex-column px-4" /* style={{background: "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(191,173,183,1) 52%, rgba(255,173,182,1) 66%, rgba(255,255,255,1) 83%)"}} */
                    >
                      <Link to="/crearCalificacion">
                        {" "}
                        <button type="button" className="btn btn-outline-dark ms-2">
                          Deja tu reseña
                        </button>{" "}
                      </Link>
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
