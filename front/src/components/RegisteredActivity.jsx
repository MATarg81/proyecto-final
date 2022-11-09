import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getActivities } from "../redux/actions/activitiesActions";


export default function RegisteredActivity() {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getActivities());
    }, [dispatch]);
  
    const allActivities = useSelector(
      (state) => state.activitiesReducer.activities
    );

    return(
        <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        {allActivities?.map((a) => {
            return (
              <div className="col" key={a.name}>
                <div
                  className="card h-100 m-2"
                  style={{
                    border: "1px solid black",
                  }}
                >
                

                  <div
                    className="card-body"
                    style={{
                      backgroundColor: "rgba(160, 160, 160, 0.788)",
                      padding: "0px",
                    }}
                  >
                    <h5 className="card-title">{a.name}</h5>
                    
                    <p className="card-text">
                      <small className="text-muted">Usarios inscriptos:
                      <br />
                      {a.users.map(e => " " + e.email + " / ")}
                      </small>
                    </p>
                    </div>
                </div>
                  </div>
            )})}
      </div>   
)};