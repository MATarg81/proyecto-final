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
        <div className="row row-cols-1 row-cols-md-1 g-4 mb-4">
        {allActivities?.map((a) => {
            return (
              <div className="col" key={a.name}>
                <div
                  className="card h-100 m-2"
                  
                >
                

                  <div
                    className="card-body rounded bg-transparent border-0"
                    style={{
                      backgroundColor: "#FFFFDF",
                      padding: "10px"
                     
                    }}
                  >
                    <h5 className="card-title display-6">{a.name}</h5>
                    
                    <p className="card-text">
                      <small className="text-muted border-bottom">Usuarios inscriptos:
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