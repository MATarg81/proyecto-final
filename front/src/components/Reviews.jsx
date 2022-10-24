import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getReviews
} from "../redux/actionsCreator/reviewsActions";


export default function Reviews() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);


  const allReviews = useSelector(
    (state) => state.reviewsReducer.reviews
  );


    	


  return (
    <div>
      <div class="container p-3">
        <div class="row">
          <div class="col">
            <h3 class="">Reseñas de nuestros socios</h3>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mb-4">
        {allReviews ? (
          allReviews.map((a) => {
            return (
              <div className="col" key={a.score}>
                <div
                  className="card h-100 m-2"
                  style={{
                    border: '1px solid black'
                  }}>


                  <div className="card-body" style={{ backgroundColor: 'rgba(160, 160, 160, 0.788)', padding: "0px" }}>
                    <h5 className="card-title">
                      {a.score}

                      </h5>
                    <p className="card-text">{a.content}</p>
                    <p className="card-text">
                      <small className="text-muted">Actividad: {a.activity}</small>
                    </p>
                    <p className="card-text">
                      <small className="text-muted">Nombre: {a.name}</small>
                    </p>                 
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div>Loading Reviews....</div>
        )}
      </div>
    </div>
  );
}