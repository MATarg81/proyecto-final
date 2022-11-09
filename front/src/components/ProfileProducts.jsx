import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderByPrice } from "../redux/actions/activitiesActions";
import {
  filterByCategories,
  getCategories,
  getProducts,
  orderByName,
} from "../redux/actionsCreator/productsActions";
import CreateProduct from "./CreateProduct/CreateProduct";
import ProfileEditProduct from "./ProfileEditProduct";

export default function ProfileProducts() {
  const products = useSelector((state) => state.productsReducer.showProducts);
  const categories = useSelector((state) => state.productsReducer.categories);
  const byCategories = useSelector(
    (state) => state.productsReducer.byCategories
  );

  const [order, setOrder] = useState("");
  const dispatch = useDispatch();

  const allProducts = byCategories?.length ? byCategories : products;

  useEffect(() => {
    if (categories?.length === 0) {
      dispatch(getCategories());
    }
    if (products?.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products, categories]);

  useEffect(() => {
    if (order === "A/Z") {
      dispatch(orderByName(order));
    }
    if (order === "Z/A") {
      dispatch(orderByName(order));
    }
    if (order === "MIN/MAX") {
      dispatch(orderByPrice(order));
    }
    if (order === "MAX/MIN") {
      dispatch(orderByPrice(order));
    }
  }, [order, dispatch]);

  const filterCategories = (e) => {
    e.preventDefault();
    dispatch(filterByCategories(e.target.value));
  };

  return (
    <div className="container-fluid">
      <div className="d-flex flex-row">

        <button
          type="button"
          className="btn btn-outline-dark rounded-pill text-white border-white p-1"
          style={{backgroundColor:"indigo"}}
          data-bs-toggle="modal"
          data-bs-target="#editProduct"
        >
          Editar
        </button>
        <CreateProduct />
      </div>
      <div>
        <table className="table table-responsive-sm table-striped table-hover table-success">
          <thead >
            <tr className="d-flex col-sm-10">
              <th className="col-sm-2">
                Nombre
                <select
                  type="button"
                  className="btn btn-outline-dark btn-sm rounded-pill border-0 w-25"
                  style={{ width: "250px" }}
                  onChange={(e) => setOrder(e.target.value)}
                >
                  <option value="-">⇅</option>
                  <option value="A/Z">A-Z</option>
                  <option value="Z/A">Z-A</option>
                </select>
              </th>
              <th className="col-sm-1" style={{width:"120px"}}>
                Precio
                <select
                  type="button"
                  className="btn btn-outline-dark btn-sm rounded-pill border-0 w-25"
                  style={{ width: "30%" }}
                  onChange={(e) => setOrder(e.target.value)}
                >
                  <option value="-">⇅</option>
                  <option value="MIN/MAX">Asc.</option>
                  <option value="MAX/MIN">Desc.</option>
                </select>
              </th>
              <th className="col-sm-1" style={{width:"120px"}}>
                Categoría
                <select
                  type="button"
                  className="btn btn-outline-dark btn-sm rounded-pill border-0 w-25"
                  style={{ width: "30%" }}
                  onChange={filterCategories}
                >
                  <option defaultValue="-">-</option>
                  {categories?.map((c) => (
                    <option name={c.name} key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </th>
              <th className="col-sm-1"  style={{width:"420px"}}>Detalle</th>
              <th className="col-sm-1" style={{width:"84px"}}>Imagen</th>
              <th className="col-sm-1">Stock</th>
            </tr>
          </thead>
          <tbody>
            {allProducts &&
              allProducts?.map((p) => {
                return (
                  <>
                    <tr className="d-flex col-sm-10">
                      <td className="col-sm-2 text-truncate">{p.name}</td>
                      <td className="col-sm-1" style={{width:"120px"}}>{p.price}</td>
                      <td className="col-sm-1" style={{width:"120px"}}>
                        {p.categories.map((c) => c.name)}
                      </td>
                      <td className="col-sm-1 text-truncate" style={{width:"420px"}}>{p.detail}</td>
                      <td className="col-sm-1" >
                        {p.image.map((i) => {
                          return (
                            <img
                              src={i}
                              className="img-fluid img-thumbnail"
                              style={{width:"30px"}}
                              alt="Foto producto"
                            />
                          );
                        })}
                      </td>
                      <td className="col-sm-1">{p.stock}</td>
                    </tr>
                  </>
                );
              })}
            <div
              className="modal fade"
              id="editProduct"
              tabindex="-1"
              aria-labelledby="editProductLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="editProductLabel">
                      Editar producto
                    </h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div className="modal-body">
                    <ProfileEditProduct />
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}
