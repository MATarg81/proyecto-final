import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
//import { addCart } from "../redux/actions/index";
import { addFav } from "../redux/actionsCreator/favsActions";
import { addCart } from "../redux/actionsCreator/cartActions";
import {
  getProducts,
  orderByName,
  orderByPrice,
  filterByCategories,
  getCategories,
  filterByPrice,
  searchProducts,
} from "../redux/actionsCreator/productsActions";
import Favorites from "./Favorites";
import SearchBar from "./SearchBar";
//import cuore from "../imagesTeam/cuore.png"
import { AiFillHeart } from "react-icons/ai";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login/LoginButton";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import "animate.css/animate.min.css"
import banner from "../imagesTeam/deportistacrop.jpg"

function Shop() {

  //-----------------hover --------------- no se usa, estoy probando como implementarlo bien
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  //----------- Utils -----------------
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // --------- Global states ---------------
  const products = useSelector((state) => state.productsReducer.showProducts);
  const category = useSelector((state) => state.productsReducer.categories);
  const price = useSelector((state) => state.productsReducer.filterByPrice);
  const cart = useSelector((state) => state.cartReducer.items);
  const byCategories = useSelector(
    (state) => state.productsReducer.byCategories
  );
  const cart_state = useSelector((state) => state.cartReducer);
  const fav_state = useSelector((state) => state.favReducer)

  const [, setCart] = useLocalStorage("cart", cart);
  //const favState = useSelector(state => state.FavReducer.favs)
  // --------------- Pagination --------------
  const productsPerPage = 12;

  const totalPages =
    byCategories.length > 0
      ? Math.ceil(byCategories?.length / productsPerPage)
      : price.length > 0
        ? Math.ceil(price?.length / productsPerPage)
        : Math.ceil(products?.length / productsPerPage);

  const [, setOrder] = useState();
  const [input, setInput] = useState({
    min: "",
    max: "",
  });

  const [page, setPage] = useState(1);
  const first = (page - 1) * productsPerPage;
  const last = page * productsPerPage;
  let productsPage =
    byCategories.length > 0
      ? byCategories?.slice(first, last)
      : price.length > 0
        ? price?.slice(first, last)
        : products?.slice(first, last);

  // --------------- Data call -------------

  //Categories
  useEffect(() => {
    if (category?.length === 0) {
      dispatch(getCategories());
    }
  }, [dispatch, category]);

  //Products
  useEffect(() => {
    if (category?.length > 0) {
      dispatch(getProducts());
    }
  }, [dispatch, category]);

  //favs
  function handleAddtoFav(id) {
    //ADDtoFavs(p)
    dispatch(addFav(id));
    //localStorage.setItem('favs', JSON.stringify(favState))
    alert("Producto agregado a favoritos");
  }

  // useEffect(() => { //si cambia el estado local FavState , entonces setIteame el LS
  //   localStorage.setItem('favs', JSON.stringify(favState))
  // }, [favState])
  // --------------- Cart function ----------------
  const addProduct = (product) => {
    dispatch(addCart(product));
    setCart(cart);
  };

  // -------------- sort functions ------------
  const orderName = function (e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setOrder(e.target.value);
  };

  const orderPrice = function (e) {
    e.preventDefault();
    dispatch(orderByPrice(e.target.value));
    setOrder(e.target.value);
  };

  const order = function (e) {
    setPage(1);
    if (e.target.value === "A/Z" || e.target.value === "Z/A") {
      orderName(e);
    }
    if (e.target.value === "MAX/MIN" || e.target.value === "MIN/MAX") {
      orderPrice(e);
    }
  };

  // ----------------- filter functions ------------------
  const filterCategories = (e) => {
    e.preventDefault();
    setPage(1);
    dispatch(filterByCategories(e.target.value));
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  /* const handleSumit = (e) => {
    e.preventDefault();
    setPage(1);
    if (byCategories.length > 0) {
      const filteredCategories = byCategories?.filter((c) => {
        return parseInt(c.price) > input.min && parseInt(c.price) < input.max;
      });
      dispatch(filterByPrice(filteredCategories));
    } else {
      const filteredAll = products?.filter((p) => {
        return parseInt(p.price) > input.min && parseInt(p.price) < input.max;
      });
      dispatch(filterByPrice(filteredAll));
    }
  }; */

  //--------------- clean sort and filters function --------------------
  const cleanFilters = (e) => {
    e.preventDefault();
    setPage(1);
    dispatch(getProducts());
    dispatch(filterByPrice([]));
    dispatch(filterByCategories([]));
  };

  const { user, isAuthenticated } = useAuth0();

  return (
    // isAuthenticated?    
    <>
      <>

        {/* --------------------------------------------------------------------------------- */}
        <div class="container position-relative d-block text-center m-1 p-0 ">
          <img src={banner} alt="banner"></img>
          <div class="text-center text-white position-absolute top-50 start-50">
            <h1 class="display-4 fw-bolder">Shop Athenas</h1>
            <p class="lead fw-normal text-white mb-0"><b>Todo</b> para mejorar tu rendimiento</p>
          </div>
        </div>


        {/* //////////////////////////////////////// */}

        <div class="row align-items-center py-3 px-xl-5">
          <div class="col-lg-3 d-none d-lg-block" >
            <h1 class="m-0 display-5 font-weight-semi-bold"><span class="font-weight-bold border px-1 mr-1" style={{color: "indigo"}}>T</span>ienda</h1>
          </div>
          <div class="col-lg-6 col-6 text-left ">
            <SearchBar setPage={setPage} />
            <select
              onChange={order}
              className="btn border dropdown-toggle rounded-pill text-white"
              style={{backgroundColor: "indigo"}}
            >
              <option defaultValue="ordenar">Ordenar por:</option>
              <option value="A/Z">A/Z</option>
              <option value="Z/A">Z/A</option>
              <option value="MIN/MAX">Menor precio</option>
              <option value="MAX/MIN">Mayor precio</option>
            </select>
            <select
              onChange={filterCategories}
              className="btn border dropdown-toggle rounded-pill text-white"  style={{backgroundColor: "indigo"}}>
              <option defaultValue="Categories">Filtrar categorías</option>
              {category?.map((c) => (
                <option name={c.name} key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <button onClick={cleanFilters} className="btn btn-outline-danger text-dark ms-2 border rounded-pill" >
              Borrar filtros
            </button>
            
          </div>
          <div class="col-lg-3 col-6 text-right" data-toggle="tooltip" data-placement="bottom" title="Favoritos">
            <Link className="" to="/favorites">

              <svg xmlns="http://www.w3.org/2000/svg" style={{color: "indigo"}} width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
              </svg>
              <span class="badge text-dark ">({fav_state.favs?.length})</span>
            </Link>

            <Link to="/carrito" data-toggle="tooltip" data-placement="bottom" title="Carrito">
              <svg xmlns="http://www.w3.org/2000/svg" style={{color: "indigo"}} width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </Link>



            <span class="badge text-dark">({cart_state.items?.length})</span>
          </div>
        </div>

        {/* //////////////////////////////////////////// */}

        <div class="container animate__animated animate__fadeInUp" style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "3rem",
          margin: "2rem",
        }}>
          {productsPage?.map((p) => (
            <div class="card product-item border-0" key={p.id}>
              <div class="card-header product-img position-relative overflow-hidden bg-transparent border p-0 h-100 ">
                <div class="" onClick={() => navigate(`/tienda/${p.id}`)} >

                  <img class="img-fluid hover-zoom bg-image" src={p.image}/* className="card-img-top" */ alt={p.name} />

                </div>
              </div>
              <div class="card-body border-left border-right text-center">
                <h6 class="text-truncate ">{p.name}</h6>
                <div class="d-flex justify-content-center">
                  <h6>$ {p.price}</h6>
                </div>
              </div>
              <div class="card-footer d-flex justify-content-between border text-primary" >
                <a onClick={() => navigate(`/tienda/${p.id}`)} class="btn btn-sm  p-0" >
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16" >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  </i>
                </a>
                <a onClick={() => addProduct(p)} class="btn btn-sm  p-0">
                  <i >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </i>
                </a>
                <a onClick={() => handleAddtoFav(p.id)} class="btn btn-sm  p-0">
                  <i>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-through-heart" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a21.86 21.86 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354l-1.5 1.5Zm2.893-4.894A20.419 20.419 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708L5.747 10.96Z" />
                    </svg>
                  </i>
                </a>

              </div>
            </div>
          ))}
        </div>

        {/* PAGINACION */}






      </>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </>
    // :
    // <div>
    //   <h3>need to login, click here </h3> <LoginButton />
    //   <hr />
    // </div>
  );
}

export default Shop;























