import React, { useState, useEffect } from "react";
// import Skeleton from "react-loading-skeleton";
// import { Link } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from '../redux/actionsCreator/productsActions';
// import Product from './Product';
import Pagination from './Pagination';
import Sort from "./Sort";
import { addCart } from "../redux/actions/index"

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
  const productsPerPage = 9;
  const totalPages = Math.ceil(products?.length / productsPerPage);

  const [page, setPage] = useState(1);
  const first = (page - 1) * productsPerPage;
  const last = page * productsPerPage;
  const productsPage = products?.slice(first, last);

  useEffect(() => {
    if (products?.length === 0) {
      dispatch(getProducts());
      // console.log(getProducts());
    }
  }, [dispatch, products]);

  // const orderName = function(e) {
  //     e.preventDefault();
  //     dispatch(orderByName(e.target.value));
  //     setOrder(e.target.value);
  // }

  // const orderPrice = function(e) {
  //     e.preventDefault();
  //     dispatch(orderByPrice(e.target.value));
  //     setOrder(e.target.value);
  // }

  // const order = function (e) {
  //     setPage(1);
  //     if (e.target.value === "A/Z" || e.target.value === "Z/A") {
  //         orderName(e);
  //     }
  //     if (e.target.value === "max/min" || e.target.value === "min/max") {
  //         orderPrice(e);
  //     }
  // }

  // const handleChange = (e) => {
  //     setName(e.target.value);
  // }

  // const filterCategories = (e) => {
  //     setPage(1);
  //     dispatch(filterByCategories(e.target.value));
  // }

  //     const cleanFilters = (e) => {
  //         e.preventDefault();
  //         dispatch(getProducts());
  //     }

  //     console.log(products)
  //------------------------------------------------------

  return (
    <>
      <div>
        <Sort />
        {/* {productsPage?.map((r) =>                 
            <Product key={r.id} id={r.id} name={r.name} img={r.image} price={r.price}/>
        )}  */}
      </div>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
//   <div>
//     <nav>
//         <div>
//             <select onChange = {order}>
//                 <option defaultValue= "---">---</option>
//                 <option value="A/Z">A/Z</option>
//                 <option value="Z/A">Z/A</option>
//                 <option value="min/max">min/max</option>
//                 <option value="max/min">max/min</option>
//             </select>

// </div>
//     <div>
//         <button onClick={cleanFilters}>Clean Filters</button>
//         <Link to="/create"><button>Create a new Product</button></Link>
//     </div>
// </nav>

// const Loading = () => {
//   return (
//     <>
//       <div className="col-md-3">
//         <Skeleton height={350} />
//       </div>
//       <div className="col-md-3">
//         <Skeleton height={350} />
//       </div>
//       <div className="col-md-3">
//         <Skeleton height={350} />
//       </div>
//       <div className="col-md-3">
//         <Skeleton height={350} />
//       </div>
//     </>
//   );
// };

// const filterProduct = (cat) => {
//   const updatedList = data.filter((x) => x.category === cat);
//   setFilter(updatedList);
// };

// const ShowProducts = () => {
//   return (
//     <>
//       <div className="buttons d-flex justify-content-center mb-5 pb-5">
//         <button
//           className="btn btn-outline-dark me-2"
//           onClick={() => setFilter(data)}
//         >
//           Todo
//         </button>
//         <button
//           className="btn btn-outline-dark me-2"
//           onClick={() => filterProduct("men's clothing")}
//         >
//           Sucursal A
//         </button>
//         <button
//           className="btn btn-outline-dark me-2"
//           onClick={() => filterProduct("women's clothing")}
//         >
//           Sucursal B
//         </button>
//         <button
//           className="btn btn-outline-dark me-2"
//           onClick={() => filterProduct("jewelery")}
//         >
//           Varios
//         </button>
//         <button
//           className="btn btn-outline-dark me-2"
//           onClick={() => filterProduct("electronics")}
//         >
//           Tecno
//         </button>
//       </div>
//       {filter.map((product) => {
//         return (
//           <>
//             <div className="col-md-3 mb-4">
//               <div className="card h-100 text-center p-4" key={product.id}>
//                 <img
//                   src={product.image}
//                   className="card-img-top"
//                   alt={product.title}
//                   height="250px"
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title mb-0">
//                     {product.title.substring(0, 20)}...
//                   </h5>
//                   <p className="card-text lead fw-bold">$ {product.price}</p>
//                   <Link
//                     to={`/tienda/${product.id}`}
//                     className="btn btn-outline-dark"
//                   >
//                     Comprar
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </>
//         );
//       })}
//     </>
//   );
// };

// return (
//   <div>
//     <div className="container my-5 py-5">
//       <div className="row">
//         <div className="col-12 mb-5">
//           <h1 className="display-6 fw-bolder text-center">
//             Últimos ingresos
//           </h1>
//           <hr />
//         </div>
//       </div>
//       <div className="row justify-content-center">
//         {loading ? <Loading /> : <ShowProducts />}
//       </div>
//     </div>
//   </div>
// );

export default Shop;
