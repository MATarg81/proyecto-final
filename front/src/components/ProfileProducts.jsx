import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategories,
  getCategories,
  getProducts,
  orderByName,
  updateProduct,
} from "../redux/actionsCreator/productsActions";
import ProfileEditProduct from "./ProfileEditProduct";
//import Pagination from "./Pagination";

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
      dispatch(orderByName(order));
    }
    if (order === "MAX/MIN") {
      dispatch(orderByName(order));
    }
  }, [order, dispatch]);

  const filterCategories = (e) => {
    e.preventDefault();
    dispatch(filterByCategories(e.target.value));
  };

  return (
    <div className="container-fluid">
      <button
        type="button"
        class="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#editProduct"
      >
        Editar
      </button>
      <div>
        <table className="table table-responsive-sm table-striped table-hover">
          <thead >
            <tr className="d-flex col-sm-10">
              <th className="col-sm-2">
                Nombre
                <select
                  type="button"
                  className="btn btn-outline-dark btn-sm border-0"
                  style={{ width: "30%" }}
                  onChange={(e) => setOrder(e.target.value)}
                >
                  <option value="-">⇅</option>
                  <option value="A/Z">A-Z</option>
                  <option value="Z/A">Z-A</option>
                </select>
              </th>
              <th className="col-sm-1">
                Precio
                <select
                  type="button"
                  className="btn btn-outline-dark btn-sm border-0"
                  style={{ width: "30%" }}
                  onChange={(e) => setOrder(e.target.value)}
                >
                  <option value="-">⇅</option>
                  <option value="MIN/MAX">Asc.</option>
                  <option value="MAX/MIN">Desc.</option>
                </select>
              </th>
              <th className="col-sm-1">
                Categoría
                <select
                  type="button"
                  className="btn btn-outline-dark btn-sm border-0"
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
              <th className="col-sm-1">Detalle</th>
              <th className="col-sm-1">Imagen</th>
              <th className="col-sm-1">Stock</th>
            </tr>
          </thead>
          <tbody>
            {allProducts &&
              allProducts.map((p) => {
                return (
                  <>
                    <tr className="d-flex col-sm-10">
                      <td className="col-sm-2 text-truncate">{p.name}</td>
                      <td className="col-sm-1">{p.price}</td>
                      <td className="col-sm-1">
                        {p.categories.map((c) => c.name)}
                      </td>
                      <td className="col-sm-1 text-truncate">{p.detail}</td>
                      <td className="col-sm-1">
                        {p.image.map((i) => {
                          return (
                            <img
                              src={i}
                              className="img-fluid img-thumbnail"
                              style={{ width: "15%", height: "75%" }}
                              alt=""
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
              class="modal fade"
              id="editProduct"
              tabindex="-1"
              aria-labelledby="editProductLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editProductLabel">
                      Editar producto
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
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
