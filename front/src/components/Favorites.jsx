import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../redux/actionsCreator/cartActions";
import { deleteFav, getAllfavs } from "../redux/actionsCreator/favsActions";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { get_users } from "../redux/actionsCreator/usersActions";

function Favorites() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();
  const favLS = useSelector((state) => state.favReducer.favsLs);
  const cart = useSelector((state) => state.cartReducer.items);
  const [, setCart] = useLocalStorage("cart", cart);
  const [, setFav] = useLocalStorage("favs", favLS);
  const fav_users = useSelector((state) => state.favReducer.userFavs);
  const stateUser = useSelector((state) => state.usersReducer.users);
  
  // console.log(stateUser)
  // console.log(user)
  
  useEffect(() => {
    if(stateUser?.length === 0) {
      dispatch(get_users());
    }
  }, [dispatch, stateUser, fav_users]);
  
  const findUser = user ? stateUser?.find((u) => u.email === user?.email) : null;

useEffect(() => {
  if(fav_users?.length === 0){
    dispatch(getAllfavs(findUser?.id));
  }
}, [dispatch, findUser?.id, fav_users?.length])

  
  const addProduct = (product) => {
    dispatch(addCart(product));
    setCart(cart);
  };


  const handleDeleteFav = (p) => {
    if (findUser) {
      dispatch(deleteFav(p.product?.id, findUser.id));
      alert("Producto eliminado de favoritos");
    } else {
      dispatch(deleteFav(p.product.id));
      setFav(favLS);
      alert("Producto eliminado de favoritos");
    }
  };

  const stateOrLs = user ? fav_users : favLS;

  return (
    <div>
      <button
        className="btn btn-line-dark ms-0 text-white  rounded-pill"
        style={{ margin: "5px", backgroundColor:"indigo" }}
        onClick={() => navigate("/tienda")}
      >
        <i className="fa fa-arrow-circle-left" aria-hidden="true"></i> Volver
      </button>

      <div className="col-lg-3 d-none d-lg-block">
        <h1 className="m-0 display-5 font-weight-semi-bold">
          <span
            className="font-weight-bold border px-1 mr-1"
            style={{ color: "indigo" }}
          >
            F
          </span>
          avoritos
        </h1>
      </div>
      <hr />

      <div
        className="container animate__animated animate__fadeInUp"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "3rem",
          margin: "2rem",
        }}
      >

        {user && fav_users ? (fav_users?.map((p, index) => (
          <div class="card product-item border-0" key={index}>
            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0 h-100 ">
              <div class="" onClick={() => navigate(`/tienda/${p?.product.id}`)}>
                <img
                  class="img-fluid hover-zoom bg-image"
                  src={p?.product.image}
                  /* className="card-img-top" */ alt="imagen"
                />
              </div>
            </div>
            <div class="card-body border-left border-right text-center">
              <h6 class="text-truncate ">{p?.product.name}</h6>
              <div class="d-flex justify-content-center">
                <h6>$ {p?.product.price}</h6>
              </div>
            </div>
            <div class="card-footer d-flex justify-content-between border text-primary">
              <a
                onClick={() => navigate(`/tienda/${p?.product.id}`)}
                class="btn btn-sm  p-0"
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
                    class="bi bi-eye"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                  </svg>
                </i>
              </a>
              <a onClick={() => addProduct(p)} class="btn btn-sm  p-0">
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
                    class="bi bi-cart"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </i>
              </a>
              <a
                onClick={() => handleDeleteFav(p)}
                class="btn btn-sm  p-0"
                style={{ color: "indigo" }}
              >
                <i class="fa fa-trash" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        ))) : 
        
        (!user && favLS?.map((p, index) => (
          <div class="card product-item border-0" key={index}>
            <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0 h-100 ">
              <div class="" onClick={() => navigate(`/tienda/${p.id}`)}>
                <img
                  className="img-fluid hover-zoom bg-image"
                  src={p.image}
                  /* className="card-img-top" */ alt={p.image}
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
              <a
                onClick={() => handleDeleteFav(p)}
                className="btn btn-sm  p-0"
                style={{ color: "indigo" }}
              >
                <i className="fa fa-trash" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        )))}
      </div>
    </div>
  );
}

export default Favorites;
