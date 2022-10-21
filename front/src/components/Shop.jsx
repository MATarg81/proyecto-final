import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { addCart } from "../redux/actions/index";
import {
  getProducts,
  orderByName,
  orderByPrice,
} from "../redux/actionsCreator/productsActions";
import SearchBar from "./SearchBar";

function Shop() {

  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const products = useSelector((state) => state.productsReducer.showProducts);
  const productsPerPage = 12;
  const totalPages = Math.ceil(products?.length / productsPerPage);
  const [, setOrder] = useState();

  const [page, setPage] = useState(1);
  const first = (page - 1) * productsPerPage;
  const last = page * productsPerPage;
  const productsPage = products?.slice(first, last);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);

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

  const cleanFilters = (e) => {
    e.preventDefault();
    dispatch(getProducts());
  };

  return (
    <>
      <div style={{minHeigth: "100%"}}>
      <nav class="navbar navbar-light bg-light" >
        <div class="container-fluid"  style={{
        background: "linear-gradient(90deg, rgba(255,255,255,1) 12%, rgba(109,67,90,1) 50%, rgba(255,255,255,1) 88%)",
        padding: "1rem",
      }}>
          <select onChange={order}class="btn btn-secondary dropdown-toggle border-0" style = {{
            background: "#FFFCF9",
            color: "#352D39"
          }}>
            <option selected defaultValue="Nombre" class="border-0">Nombre</option>
            <option value="A/Z">A/Z</option>
            <option value="Z/A">Z/A</option>
          </select>
          <select onChange={order}class="btn btn-secondary dropdown-toggle border-0" style = {{
            backgroundColor: "#FFFCF9",
            color: "#352D39"
          }}>
            <option selected defaultValue="Precio">Precio</option>
            <option value="MIN/MAX">MIN/MAX</option>
            <option value="MAX/MIN">MAX/MIN</option>
          </select>
          <SearchBar/>
          <button onClick={cleanFilters} class="btn btn-outline-success border-0" style ={{
            backgroundColor: "#FFFCF9",
            color: "#352D39"
          }}>Clean Filters</button>
        </div>
      </nav>
      </div>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: "3rem",
          margin: "2rem"
        }}
      >
        {productsPage?.map((p) => (
            <div key={p.id} className="col card border-info mb-3">
              <div className="card h-100">
                <img
                  style={{ maxWidth: "300px"}}
                  src={p.image}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h4 className="card-title">{p.name}</h4>
                  <p className="card-text">{p.detail}</p>
                  <h4>$ {p.price}</h4>
                </div>
                <div className="card-footer d-flex justify-content-around">
                  <button
                    className="btn btn-outline-dark px-4 py-2"
                    onClick={() => addProduct(p)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>

        ))}
      </div>
      <Pagination totalPages={totalPages} page={page} setPage={setPage} />
    </>
  );
}

export default Shop;