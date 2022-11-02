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

function Shop() {
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

  const handleSumit = (e) => {
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
  };

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
        <div>
          <nav className="navbar navbar-light bg-light">
            <div
              className="container-fluid"
              style={{
                background:
                  "linear-gradient(270deg, rgba(255,255,255,1) 0%, rgba(191,173,183,1) 52%, rgba(255,173,182,1) 66%, rgba(255,255,255,1) 83%)",
                padding: "1rem",
              }}
            >
              <select
                onChange={order}
                className="btn btn-secondary dropdown-toggle"
                style={{
                  backgroundColor: "#FFFCF9",
                  color: "#352D39",
                }}
              >
                <option defaultValue="ordenar">Ordenar por:</option>
                <option value="A/Z">A/Z</option>
                <option value="Z/A">Z/A</option>
                <option value="MIN/MAX">MIN/MAX</option>
                <option value="MAX/MIN">MAX/MIN</option>
              </select>
              <select
                onChange={filterCategories}
                className="btn btn-secondary dropdown-toggle"
                style={{
                  backgroundColor: "#FFFCF9",
                  color: "#352D39",
                }}
              >
                <option defaultValue="Categories">Filtrar categorías</option>
                {category?.map((c) => (
                  <option name={c.name} key={c.id} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
              {/* <form onSubmit={handleSumit}>
              <label>Precio:  </label>
              <input
                type="text"
                placeholder="Min..."
                name="min"
                onChange={handleChange}
                value={input.min}
                className="btn btn-secondary dropdown-toggle"
                style={{
                  backgroundColor: "#FFFCF9",
                  color: "#352D39",
                  maxWidth: "5rem"
                }}
              ></input>
              <input
                type="text"
                placeholder="Max..."
                name="max"
                onChange={handleChange}
                value={input.max}
                className="btn btn-secondary dropdown-toggle"
                style={{
                  backgroundColor: "#FFFCF9",
                  color: "#352D39",
                  maxWidth: "5rem"
                }}
              ></input>
              <input type="submit" value="Buscar" className="btn btn-secondary dropdown-toggle"
              style={{
                backgroundColor: "#FFFCF9",
                color: "#352D39",
              }}/>
            </form> */}
              <Link className="btn btn-outline-dark ms-2" to="/favorites">
                Favoritos
              </Link>
              <SearchBar setPage={setPage} />
              <button
                onClick={cleanFilters}
                className="btn btn-outline-dark ms-2"
              // style={{
              //   backgroundColor: "#FFFCF9",
              //   color: "#352D39",
              // }}
              >
                Borrar filtros
              </button>
              <button className="btn btn-outline-dark ms-2">
                <Link className="nav-link" to="/crearProducto">
                  Crear Producto
                </Link>
              </button>
            </div>
          </nav>
          <div></div>
        </div>
        <div
          className="grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "3rem",
            margin: "2rem",
          }}
        >
          {productsPage?.map((p) => (
            <div
              key={p.id}
              className="col card border-info mb-3"
              style={{
                border: "none",
                boxShadow: "25px 30px 70px -20px rgba(0,0,0,0.5)",
              }}
            >
              <div className="card h-100" style={{ border: "none" }}>
                <div onClick={() => navigate(`/tienda/${p.id}`)}>
                  <div
                    style={{
                      width: "200px",
                      height: "200px",
                      overflow: "hidden",
                      margin: "10px",
                      position: "relative",
                    }}
                  >
                    <img
                      style={{
                        position: "absolute",
                        left: "-100%",
                        right: "-100%",
                        top: "-100%",
                        bottom: "-100%",
                        margin: "auto",
                        maxHeigth: "200px",
                        minHeight: "100%",
                        minWidth: "100%",
                      }}
                      src={p.image}
                      className="card-img-top"
                      alt={p.name}
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">{p.name}</h4>
                    <h4>$ {p.price}</h4>
                    {/* <p className="card-text">{p.detail}</p> */}
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-around">
                  <button
                    className="btn btn-outline-dark px-4 py-2"
                    onClick={() => addProduct(p)}
                  >
                    Agregar al carrito
                  </button>
                </div>
                <div>
                  <button
                    className="btn btn-outline-dark px-4 py-2"
                    onClick={() => handleAddtoFav(p.id)}
                  >
                    <AiFillHeart />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
