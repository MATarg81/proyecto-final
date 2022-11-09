import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { get_roles, get_users } from "../redux/actionsCreator/usersActions";
import { getCategories, getProducts } from "../redux/actionsCreator/productsActions";

function Landing() {

  // const roles = useSelector((state) => state.usersReducer.roles)
  // const users = useSelector((state) => state.usersReducer.users)
  // const categories = useSelector((state) => state.productsReducer.categories)
  // const products = useSelector((state) => state.productsReducer.products)

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if(roles.length === 0) {
  //     dispatch(get_roles())
  //   }
  //   if(users.length === 0) {
  //     dispatch(get_users())
  //   }
  //   if(categories.length === 0) {
  //     dispatch(getCategories())
  //   }
  //   if(products.length === 0) {
  //     dispatch(getProducts())
  //   }
  // })

  return (
    <div>
      <div className="container">
        <main className="row mb-4">
          <div className="col-md-6 text-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/iI-od-q_0Dw"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <img src="" alt="" id="main-image" />
            <img
              src="/img/pibes club3.jpg"
              alt="pibes"
              height="275px"
              style={{ borderRadius: "10px" }}
            />
          </div>
          <div className="col-md-6 text-center my-auto">
            <h1 className="font-weight-bolder">Club Athenas</h1>
            <p>
              El Club Athenas es una institución que actúa, fomenta y desarrolla
              actividades socio-culturales y deportivas.
            </p>
            <p>Desde 2022</p>

            <Link to="/home">
              <button
                className="btn btn-primary"
                style={{ backgroundColor: "#352d39", borderColor: "white" }}
              >
                Entrar
              </button>
            </Link>

            <div className="d-flex flex-column">
              <div>
                <img
                  src="/img/athenas_logo-removebg-preview.png"
                  alt="Logo"
                  height="400px"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Landing;

//ff6978-fffcf9-b1ede8-6d435a-352d39
