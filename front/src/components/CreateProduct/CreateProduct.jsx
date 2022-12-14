import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_categories } from "../../redux/actionsCreator/categoriesActions";
import { createProduct } from "../../redux/actionsCreator/productsActions";
import { useState } from "react";
import upImage from "./cloudinary";
import validate from "./validate";

const CreateProduct = function () {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.productsReducer.categories);
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(get_categories());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: "",
    price: 0,
    image: [],
    detail: "",
    category: "",
    stock: "",
  });
  const handleImg = async (e) => {
    const upLoeadedImg = await upImage(e.target.files[0]);
    input.image.push(upLoeadedImg.url);

    setInput({
      ...input,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleCheck = (e) => {
    setInput({
      ...input,
      category: e.target.value,
    });

    setError(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let keys = Object.keys(error);
    let values = Object.values(error);
    if (keys.length === 0 && values.length === 0) {
      dispatch(createProduct(input));
      setInput({
        name: "",
        price: 0,
        image: [],
        category: "",
        stock: "",
      });
      alert("Producto creado exitosamente!");
    } else {
      alert("Debe completar todos los campos");
    }
  };

  return (
    <div>
      <div className="container-fluid">
        <button
          type="button"
          className="btn btn-outline-dark rounded-pill text-white border-white p-1"
          style={{ backgroundColor: "indigo" }}
          data-bs-toggle="modal"
          data-bs-target="#createProducts"
        >
          Crear producto
        </button>
        <div
          className="modal fade"
          id="createProducts"
          tabindex="-1"
          aria-labelledby="createProductLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="createProductLabel">
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
                <div className="ProductCreate">
                  <form onSubmit={(e) => handleSubmit(e)}>
                    <div
                      className="mb-3 row mt-3 g-2"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <label for="name" className="form-label">
                        Nombre del producto
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="text"
                        className="form-control mb-3"
                        id="name"
                        aria-describedby="name"
                        placeholder="Name..."
                        value={input.name}
                        name="name"
                        required
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      {error.name && <p>{error.name}</p>}

                      <label for="times" className="form-label">
                        Precio
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="number"
                        className="form-control mb-3"
                        id="price"
                        placeholder="Precio..."
                        value={input.price}
                        name="price"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                      {error.price && <p>{error.price}</p>}

                      <label for="image" className="form-label">
                        Imagen
                      </label>
                      <input
                        style={{
                          width: "600px",
                          boxShadow: "25px 30px 70px -20px rgba(0,0,0,0.5)",
                        }}
                        type="file"
                        // className="form-control"
                        className="col card border-info mb-3"
                        id="image"
                        placeholder="Imagen..."
                        // value={input.image}
                        name="image"
                        onChange={(e) => {
                          handleImg(e);
                        }}
                      />
                      {error.image && <p>{error.image}</p>}
                      <label for="name" className="form-label">
                        Detalles del producto:
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="text"
                        className="form-control mb-3"
                        id="detail"
                        aria-describedby="detail"
                        placeholder="Detalles..."
                        value={input.detail}
                        name="detail"
                        required
                        onChange={(e) => handleChange(e)}
                      />
                      {error.detail && <p>{error.detail}</p>}

                      <label>Categorias:</label>
                      <div>
                        {categories?.map((el) => (
                          <label htmlFor={el.name} key={el.name}>
                            <div>
                              <input
                                onClick={handleCheck}
                                key={el.name}
                                type="checkbox"
                                value={el.name}
                              />
                              <span>{el.name + "    "} </span>
                            </div>
                          </label>
                        ))}
                        {error.categories && <p>{error.categories}</p>}
                      </div>
                      <label for="stock" className="form-label">
                        Stock
                      </label>
                      <input
                        style={{ width: "600px" }}
                        type="text"
                        className="form-control mb-3"
                        id="stock"
                        aria-describedby="stock"
                        placeholder="Stock..."
                        value={input.stock}
                        name="stock"
                        required
                        onChange={(e) => {
                          handleChange(e);
                        }}
                      />
                      {error.stock && <p>{error.stock}</p>}
                      <hr />
                      <button
                        type="submit"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        Crear
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;
