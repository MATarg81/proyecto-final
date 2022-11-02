import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategories,
  getCategories,
  getDetail,
  getProducts,
  updateProduct,
} from "../redux/actionsCreator/productsActions";

export default function ProfileEditProduct() {
  //Buscar por ID
  const stateCategories = useSelector((state) => state.productsReducer.categories);
  const productId = useSelector((state) => state.productsReducer.detail);
  const allProducts = useSelector((state) => state.productsReducer.showProducts);

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: ``,
    price: ``,
    categories: [],
    detail: ``,
    image: '',
    stock: ``,
  });

  
  //   const [newCategory, setNewCategory] = useState({
  //     name: "",
  //   });
  //   const [newImage, setNewImage] = useState({
  //     image: "",
  //   });

  useEffect(() => {
    if (stateCategories?.length === 0) {
      dispatch(getCategories());
    }
    if (allProducts?.length === 0) {
      dispatch(getProducts());
    }
  }, [allProducts, dispatch, productId, stateCategories, input]);

  //   function handleDelete(e) {
  //     console.log(e.target.id);
  //   }

  function handleClick(e) {
    const findI = productId?.image.filter( i => i !== e.target.name)
    // productId.image.pop(e.target.name)
    //setInput(input.image = findI)
    console.log(e.target.name)
  }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateProduct(input))

  }

  return (
    <>
      <div >
        <label htmlFor="chooseProduct">Elige un producto</label>
        <select
          id="chooseProduct"
          className="col-12"
          onChange={(e) => {
            dispatch(getDetail(e.target.value));            
          }}
          disabled={productId?.name ? true : false}
        >
          <option value="-">Elegí un producto a editar</option>
          {allProducts?.map((p) => {
            return (
              <option key={`${p.id}`} value={`${p.id}`}>
                {p.name}
              </option>
            );
          })}
        </select>
      </div>
      <div disabled={productId ? false : true}>
        <form className="container">
          <div className="row mt-3 g-2 " onChange={handleChange} noValidate>
            <div className="">
              <label className="col-12" htmlFor="name">
                Nombre:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={productId ? productId.name : ''}
                id="name"
                value={input.name}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <label className="col-12" htmlFor="price">
                Precio:{" "}
              </label>
              <input
                className="col-12"
                type="text"
                placeholder={productId ? productId.price : ''}
                id="price"
                value={input.price}
                onChange={handleChange}
              ></input>
            </div>

            <div className="">
              <label className="col-12" htmlFor="categories">
                Categorías:
              </label>

              <div className="form-check">
                {stateCategories?.length > 0 ? stateCategories.map((c, index) => {
                    return (
                      <div>
                        <input
                          key={index}
                          className="form-check-input"
                          type="checkbox"
                          value={input.categories}
                          id="categories"
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="categories"
                        >
                          {c.name}
                        </label>
                      </div>
                    );
                  }):  <div></div>}
              </div>
              {/* <div className="">
              <label className="col-12" htmlFor="newCategory">
                Agregar categoría:
              </label>
              <input
                className="col-12"
                type="text"
                placeholder="Escribe el nombre de la categoría"
                id="newCategory"
                value={newCategory.name}
                onChange={(e) => setNewCategory(e.target.value)}
              ></input>
            </div>
          </div> */}

              <div className=" text-wrap">
                <label className="col-12" htmlFor="detail">
                  Detalle:{" "}
                </label>
                <textarea
                  className="col-12"
                  placeholder={productId ? productId.detail : ''}
                  rows="3"
                  id="detail"
                  value={input.detail}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="">
                <label className="col-12" htmlFor="stock">
                  Stock:{" "}
                </label>
                <input
                  className="col-12"
                  type="text"
                  placeholder={productId ? productId.stock : ''}
                  id="stock"
                  value={input.stock}
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label className="col-12">Imágenes: </label>
                <div>
                  {productId?.image ? productId.image.map((i, index) => {

                    return (
                      <div className=""  name={`${i}`}>
                        <img
                          
                          key={index}
                          src={i}
                          className="img-fluid img-thumbnail col-12"
                          style={{ width: "15%", height: "75%" }}
                          alt=""
                        />

                        <button
                          type="button"
                          className="btn"
                          onClick={handleClick}
                          
                        >x</button>
                      </div>
                    );
                  }): <div></div>}
                </div>
              </div>

              <div className="">
            <label className="col-12" htmlFor="newImage">
              Agregar imagen{" "}
            </label>
            <input
              className="col-12"
              type="file"   
              id="newImage"
            ></input>
          </div>
            </div>
            <div className="d-flex flex-row-reverse">
              <button
                type="button"
                className=" btn btn-primary mt-3"
                onClick={handleSubmit}
              >
                Guardar
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
