import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  getCategories,
  orderByName,
  orderByPrice,
  filterByCategories,
} from "../redux/actionsCreator/productsActions";
import Product from "./Product";

function Sort() {
  // const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);
  // const [loading, setLoading] = useState(false);
  //---------------------------------------------------------------
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer.showProducts);
  const category = useSelector((state) => state.productsReducer.categories);
  const [, setOrder] = useState();
  const [name, setName] = useState();
  const productsPerPage = 9;
  const totalPages = Math.ceil(products?.length / productsPerPage);

  const [page, setPage] = useState(1);
  const first = (page - 1) * productsPerPage;
  const last = page * productsPerPage;
  const productsPage = products?.slice(first, last);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts());
      console.log(getProducts());
      dispatch(getCategories());
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
    if (e.target.value === "max/min" || e.target.value === "min/max") {
      orderPrice(e);
    }
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const filterCategories = (e) => {
    setPage(1);
    dispatch(filterByCategories(e.target.value));
  };

  const cleanFilters = (e) => {
    e.preventDefault();
    dispatch(getProducts());
  };

  //------------------------------------------------------

  return (
    <div>
      <nav>
        <div>
          <select onChange={order}>
            <option defaultValue="Nombre">Nombre</option>
            <option value="A/Z">A/Z</option>
            <option value="Z/A">Z/A</option>
          </select>
          <select onChange={order}>
          <option defaultValue="Precio">Precio</option>
            <option value="min/max">min/max</option>
            <option value="max/min">max/min</option>
          </select>
          {/* <select onChange = {filterCategories}>
                <option defaultValue= "Filter by Category">Filter by Category</option>
            {category?.map((d) =>
                <option name={d.name} key={d.id} value={d.name}>{d.name}</option>   
            )}
            </select> */}
        </div>
        <div>
          <button onClick={cleanFilters}>Clean Filters</button>
          <Link to="/create">
            <button>Create a new Product</button>
          </Link>
        </div>
      </nav>
      {/* <div>
        {productsPage?.map((r) =>                 
            <Product key={r.id} id={r.id} name={r.name} img={r.image} price={r.price}/>
        )} 
    </div> */}
      {/* <Pagination totalPages = {totalPages} page = {page} setPage = {setPage}/>     */}
    </div>
  );
}

export default Sort;
