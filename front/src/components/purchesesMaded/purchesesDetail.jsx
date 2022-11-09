import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { cartDetail } from "../../redux/actionsCreator/cartActions";
import { Link } from "react-router-dom";

export default function PurchesesDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(cartDetail(id));
  }, [dispatch, id]);

  const purchesDetail = useSelector((state) => state.cartReducer.purchesDetail);

  return (
    <div>
      <div>
        <Link to="/profile/historial">
          <button
            className="btn btn-outline-dark rounded-pill text-white border-white p-1"
            style={{ backgroundColor: "indigo" }}
          >
            {" "}
            Go Back{" "}
          </button>
          <hr />
        </Link>
      </div>
      <div
        className="container animate__animated animate__fadeInUp"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "3rem",
          margin: "2rem",
        }}
      >
        {purchesDetail.products?.length &&
          purchesDetail.products.map((el) => {
            return (
              <div className="card product-item border-0">
                <div
                  className="card-header product-img position-relative overflow-hidden bg-transparent border p-0 h-100 btn"
                  onClick={() => navigate(`/tienda/${el.id}`)}
                >
                  <img className="img-fluid" src={el.image} alt="" />
                </div>
                <div className="card-body border-left border-right text-center">
                  <h3 className="text-truncate">{el.name}</h3>
                </div>
                <div className="d-flex justify-content-center">
                  <h4>$ {el.price}</h4>
                </div>
                {/* <h5>{el.detail}</h5> */}
              </div>
            );
          })}
      </div>
      <hr />
    </div>
  );
}

/*
    <div>
    <div>
      <Link to="/profile/historial">
        <button className="btn btn-outline-dark rounded-pill text-white border-white p-1" style={{backgroundColor: "indigo"}}> Go Back </button>
      </Link>
      </div>
      <div>
      {purchesDetail.products?.length &&
        purchesDetail.products.map((el) => {
          return (
            <div className="card card-body">
              <h1 className="text-center my-2">{el.name}</h1>
              <h1>{el.price}</h1>
              <h1>{el.detail}</h1>
              <img className="img-fluid" src={el.image} alt="" />
            </div>
          );
        })}
        </div>
    </div>
    */
