import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, delCart, delAll, postCart, totalPrice } from "../redux/actionsCreator/cartActions";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { useEffect } from "react";
import { useState } from "react";


const Cart = () => {
  const state = useSelector((state) => state.cartReducer.items);
  const allState = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [, setCart] = useLocalStorage('cart', state)
  const [price, setPrice] = useState(0)

  //console.log(statePrice)
  useEffect(() => {
    if(state) {
      setCart(state)
      //dispatch(totalPrice(state))
    }
  }, [state, setCart])

  useEffect(() => {
    if(state){
      let sum = 0
      state?.map(i => {
        return sum = sum + parseInt(i.price) * parseInt(i.qty)
      })
      setPrice(sum)
        dispatch(totalPrice(sum))
      
    }
  }, [])

  const handleAdd = (item) => {
    dispatch(addCart(item));
    setCart(state)
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
    setCart(state)
  };
  const handleDeleteAll = () => {
    dispatch(delAll());
    setCart([])
  }

  const handleCartDB = () => {
    dispatch(postCart(allState));
    setCart([]);
    dispatch(delAll());
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
                  {product.qty} x $ {product.price} = ${product.qty * product.price}
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
            <h3>TOTAL: ${price}</h3>
            <button
              className="btn btn-outline-dark mb-5 w-25 mx-auto"
              onClick={handleDeleteAll}
            >
              Vaciar Carrito
            </button>
            <Link
              onClick={handleCartDB}
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
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
