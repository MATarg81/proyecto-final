import React from "react";
// import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  deleteActivity,
} from "../redux/actions/activitiesActions";


export default function Activities() {

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getActivities());
  }, [dispatch]);

  
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
      <h1>Athenas Club Activities</h1>
      <hr />
      <Link to="/crearActividades">
        {" "}
        <button type="button" className="btn btn-primary">Crear Actividad</button>{" "}
      </Link>
      <hr />

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {allActivities ? (
          allActivities.map((a) => {
            return (
              <div className="col" key={a.name}>
                <div
                  className="card h-100"
                  style={{
                    margin: '15px',
                    border: '1px solid black'
                  }}>

                  <img
                    src={a.img}
                    style={{ height: "250px", width: "100%" }}
                    className="card-img-top"
                    alt="..."
                  />

                  <div className="card-body" style={{ backgroundColor: 'rgba(160, 160, 160, 0.788)' }}>
                    <h5 className="card-title">{a.name}</h5>
                    <p className="card-text">{a.detail}</p>
                    <p className="card-text">
                      <small className="text-muted">{a.days}</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">{a.times}</small>
                    </p>
                    <button type="button" className="btn btn-secondary">Inscribirse</button>
                    <button
                      type="button"
                      className="btn btn-dark"
                      style={{
                        width: "100px",
                        position: "absolute",
                        right: "4px",
                      }}
                      onClick={() => handleDeleteActivity(a.id)}
                    >Delete X
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading Activities....</div>
        )}
      </div>
    </div>
  );
}
