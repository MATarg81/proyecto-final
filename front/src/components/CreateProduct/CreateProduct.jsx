import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { get_categories } from "../../redux/actionsCreator/categoriesActions";
import { createProduct } from "../../redux/actionsCreator/productsActions";
import { useState } from "react";
import upImage from "./cloudinary";
import validate from "./validate";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import LoginButton from "../Login/LoginButton";

import Register from "../Register";


const CreateProduct = function () {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.productsReducer.categories);
  const [error, setError] = useState({});
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    dispatch(get_categories());
  }, [dispatch]);

  const stateUser = useSelector((state) => state.usersReducer.users);
  const findUser = stateUser.find((u) => u.email === user.email);

  const [input, setInput] = useState({
    name: "",
    price: 0,
    image: "",
    detail: "",
    category: "",
  });
  const handleImg = async (e) => {
    const upLoeadedImg = await upImage(e.target.files[0]);

    setInput({
      ...input,
      image: upLoeadedImg.url,
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
        image: "",
        category: "",
      });
      alert("Product created succesfully!");
    } else {
      alert("You must fill in all fields.");
    }
  };


  return !findUser ? (
    <div>
      <p>you must login or finish registration, click here!</p>
      <LoginButton />
    </div>
  ) : (

    <div>
      <Link to="/tienda">
        <button> Go Back </button>
      </Link>
      <div className="ProductCreate">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div
            className="mb-3"
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

            <hr />
            <button type="submit" className="btn btn-primary">
              Crear
            </button>
          </div>
        </form>
      </div>
    </div> : <Register/>
  );
};
export default withAuthenticationRequired(CreateProduct, {
  onRedirecting: () => <h1>redirigiendo al login, aguarde..</h1>,
});

//export default CreateProduct;
