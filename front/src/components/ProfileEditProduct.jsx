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
  const stateCategories = useSelector(
    (state) => state.productsReducer.categories
  );
  const productId = useSelector((state) => state.productsReducer.detail);
  const allProducts = useSelector(
    (state) => state.productsReducer.showProducts
  );

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    id: ``,
    name: ``,
    price: ``,
    categories: '',
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
  }, [allProducts, dispatch, productId.length, stateCategories, productId]);

  
  function deleteImg(e) {
    const findI = productId?.image.filter((i) => i !== e.target.name);
    productId.image.splice(e.target.id, 1)
    if (findI?.length > 0) {
      setInput((input.image = findI));
    }
  }

  // function setCategories(e) {
  //   const newcategories = []
  //   newcategories.push(e.target.name)
  //   if(newcategories?.length > 0 && !input.categories) {
  //     setInput(input.categories = newcategories)
  //   } else {
  //     input.categories.push(e.target.name)
  //   }
  // }

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  }

  function handleSubmit(e) {
    setInput((input.id = productId.id));
    if (!input?.image?.length && productId?.image?.length === 0) { setInput(input.image = []) }
    if (!input?.image?.length && productId?.image?.length > 0) { setInput(input.image = productId.image) }
    if (!input.name) { setInput((input.name = productId.name)) }
    //if (!input.categories) { setInput((input.categories = productId.categories)) }
    if (!input.price) { setInput((input.price = productId.price)) }
    if (!input.detail) { setInput((input.detail = productId.detail)) }
    if (!input.stock) { setInput((input.stock = productId.stock)) }
    console.log(input)
    dispatch(updateProduct(input));
  }

  return (
    <>
      <div>
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
                placeholder={productId ? productId.name : ""}
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
                placeholder={productId ? productId.price : ""}
                id="price"
                value={input.price}
                onChange={handleChange}
              ></input>
            </div>

            {/* <div className="">
              <label className="col-12" htmlFor="categories">
                Categorías:
              </label>

              <div className="form-check">
                {stateCategories?.length > 0 ? (
                  stateCategories.map((c, index) => {
                    return (
                      <div>
                        <input
                          id={index}
                          className="form-check-input"
                          type="checkbox"
                          name={c.name}
                          onClick={setCategories}
                        ></input>
                        <label
                          className="form-check-label"
                          htmlFor="categories"
                        >
                          {c.name}
                        </label>
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
              </div> */}
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
                  placeholder={productId ? productId.detail : ""}
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
                  placeholder={productId ? productId.stock : ""}
                  id="stock"
                  value={input.stock}
                  onChange={handleChange}
                ></input>
              </div>

              <div>
                <label className="col-12 " for="image">
                  Imágenes:{" "}
                </label>
                <div className="d-inline-flex ">
                  {productId?.image ? (
                    productId.image.map((i, index) => {
                      return (i === undefined ? (<></>) :
                      (
                        <div className="" id="image">
                          <div className="position-relative">
                            <button
                              id={index}
                              name={`${i}`}
                              type="button"
                              className="btn position-absolute btn-sm"
                              style={{
                                right: "0",
                                padding: "0",
                                paddingRight: "5px",
                              }}
                              onClick={deleteImg}
                            >
                              x
                            </button>
                            <img
                              key={index}
                              src={i}
                              style={{ width: "70px", height: "70px" }}
                              className="img-fluid img-thumbnail "
                              alt=""
                            />
                          </div>
                        </div>
                      )
                    )})
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
                  {/*Esto va con cloudinary */}
              <div className="">
                <label className="col-12" htmlFor="newImage">
                  Agregar imagen{" "}
                </label>
                <input className="col-12" type="file" id="newImage" onChange={(e) => {
                  input.image.push(e.target.id)
                    console.log(input.image)
                  }}></input>
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
         
        </form>
      </div>
    </>
  );
}
