import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, delCart, delAll } from "../redux/actionsCreator/cartActions";
import { useLocalStorage } from "../localStorage/useLocalStorage";

const Cart = () => {
  const state = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [, setCart] = useLocalStorage('cart', state.items)

  const handleAdd = (item) => {
    dispatch(addCart(item));
    setCart(state.items)
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
    setCart(state.items)
  };
  const handleDeleteAll = () => {
    dispatch(delAll());
    setCart(state.items)
  }

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3>Tu carrito está vacío</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="px-4 my-5 bg-light rounded-3 py-5">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-md-4">
                <img
                  src={product.image}
                  alt={product.name}
                  height="200px"
                  width="180px"
                />
              </div>
              <div className="col-md-4">
                <h3>{product.name}</h3>
                <p className="lead fw-bold">
                  {product.qty} x $ {product.price} = ${" "}
                  {product.qty * product.price}
                </p>
                <hr />
                <button
                  className="btn btn-outline-dark me-2"
                  onClick={() => handleDel(product)}
                >
                  <i className="fa fa-minus"></i>
                </button>
                <button
                  className="btn btn-outline-dark"
                  onClick={() => handleAdd(product)}
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="row">
          <h3>TOTAL: ${state.price}</h3>
          <button className="btn btn-outline-dark mb-5 w-25 mx-auto" onClick = {handleDeleteAll}>Eliminar Carrito</button>
            <Link
              to="/checkout"
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
            >
              Proceder al pago
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      {state.items.length === 0 && emptyCart()}
      {state.items.length !== 0 && state.items.map(cartItems)}
      {state.items.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
