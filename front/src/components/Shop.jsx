import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./Pagination";
import { addCart } from "../redux/actions/index";
import {
  getProducts,
  orderByName,
  orderByPrice,
  filterByCategories,
  //searchProducts,
  getCategories,
  filterByPrice,
} from "../redux/actionsCreator/productsActions";
import SearchBar from "./SearchBar";
//import Sort from "./Sort";

function Shop() {
  // const [data, setData] = useState([]);
  // const [filter, setFilter] = useState(data);
  // const [loading, setLoading] = useState(false);
  //---------------------------------------------------------------
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };
  const products = useSelector((state) => state.productsReducer.showProducts);
  const byCategories = useSelector(
    (state) => state.productsReducer.byCategories
  );
  const category = useSelector((state) => state.productsReducer.categories);
  const price = useSelector((state) => state.productsReducer.filterByPrice)
  const productsPerPage = 9;
  const totalPages = Math.ceil(products?.length / productsPerPage);
  const [, setOrder] = useState();
  const [input, setInput] = useState({
    min: '',
    max: ''
  });

  const [page, setPage] = useState(1);
  const first = (page - 1) * productsPerPage;
  const last = page * productsPerPage;
  let productsPage =
    byCategories.length > 0
      ? byCategories?.slice(first, last) : price.length > 0 ? price?.slice(first, last)
      : products?.slice(first, last);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts());
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
    if (e.target.value === "MAX/MIN" || e.target.value === "MIN/MAX") {
      orderPrice(e);
    }
  };

  
  const filterCategories = (e) => {
    e.preventDefault();
    setPage(1);
    dispatch(filterByCategories(e.target.value));
  };
  
  function handleChange(e) {
    setInput({min: e.target.min, max: e.target.max})
  }

  const handleSumit = (e) => {
    e.preventDefault()
    const byPrice = [] // eslint-disable-next-line
    products.map( p => {
      if(p.price > input.min && p.price < input.max){
        byPrice.push(p)
      }
    })// eslint-disable-next-line
    byCategories.map(c => {
      if(byCategories.price > input.min && byCategories.price < input.max)
      byPrice.push(c)
    })
    dispatch(filterByPrice(byPrice))
  };


  const cleanFilters = (e) => {
    e.preventDefault();
    dispatch(getProducts());
  };

  //     console.log(products)
  //------------------------------------------------------

  return (
    <>
      <div>
        <nav>
          <div>
            <SearchBar />
            {/* <Sort /> */}
            <select onChange={order}>
              <option defaultValue="ordenar">Ordenar por:</option>
              <option value="A/Z">A/Z</option>
              <option value="Z/A">Z/A</option>
              <option value="MIN/MAX">MIN/MAX</option>
              <option value="MAX/MIN">MAX/MIN</option>
            </select>
            <select onChange={filterCategories}>
              <option defaultValue="Categories">Filtrar categorías</option>
              {category?.map((c) => (
                <option name={c.name} key={c.id} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
            <form onSubmit={handleSumit}>
              <label>Elegir rango de precios:</label>
              <input
                type="text"
                placeholder="Min..."
                name="precioMin"
                onChange={handleChange}
                min={input.min}
              ></input>
              <input
                type="text"
                placeholder="Max..."
                name="precioMax"
                onChange={handleChange}
                max={input.max}
              ></input>
              <input type='submit' value='Buscar'/>
            </form>
          </div>
        </nav>
        <div>
          <button onClick={cleanFilters}>Clean Filters</button>
          {/* <Link to="/create">
            <button>Create a new Product</button>
          </Link>
          </div>
        </nav>
        {/* <Sort />
        {productsPage?.map((r) =>                 
        <Searchbar/>
        <Sort />
        {/* {productsPage?.map((r) =>                 
            <Product key={r.id} id={r.id} name={r.name} img={r.image} price={r.price}/>
        )}  */}
        </div>
      </div>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr 1fr",
          gap: "5px 5px",
        }}
      >
        {productsPage?.map((p) => (
          <div key={p.id} className="col card border-info mb-3">
            <div className="card h-100">
              <img
                style={{ maxWidth: "300px" }}
                src={p.image}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <h3 className="card-title">{p.name}</h3>
                <p className="card-text">{p.detail}</p>
                <h4>$ {p.price}</h4>
              </div>
              <div className="card-footer">
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
