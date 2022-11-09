import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  addCart,
  delCart,
  delAll,
  postCart,
  totalPrice,
} from "../redux/actionsCreator/cartActions";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginButton from "./Login/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";
import { get_users } from "../redux/actionsCreator/usersActions";

const Cart = () => {
  const state = useSelector((state) => state.cartReducer.items);
  const allState = useSelector((state) => state.cartReducer);
  const allUsers = useSelector((state) => state.usersReducer.users);
  const dispatch = useDispatch();
  const [, setCart] = useLocalStorage("cart", state);
  const [price, setPrice] = useState(0); //eslint-disable-next-line
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (state) {
      setCart(state);
    }
    if(allUsers?.length === 0) {
      dispatch(get_users())
    } //eslint-disable-next-line
  }, [state, setCart]);

  useEffect(() => {
    if (state) {
      let sum = 0;
      state?.map((i) => {
        return (sum = sum + parseInt(i.price) * parseInt(i.qty));
      });
      setPrice(sum);
      dispatch(totalPrice(sum));
    } //eslint-disable-next-line
  }, [state]);

  const findUser =  user ? allUsers?.find( u => u.email === user.email) : null


  const handleAdd = (item) => {
    dispatch(addCart(item));
    setCart(state);
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
    setCart(state);
  };
  const handleDeleteAll = () => {
    dispatch(delAll());
    setCart([]);
  };

  // const handleCartDB = () => {
  //   dispatch(postCart(allState));
  //   setCart([]);
  //   dispatch(delAll());
  // };

  //-------PRUEBAS MP----------------------------------------------

  const handlePayment = async () => {
    let data = allState.items.map((p) => {
      return {
        id: p.id,
        name: p.name,
        description: p.detail,
        quantity: p.qty,
        unit_price: Number(p.price),
      };
    });
    // console.log("Orden de compra: ", data);
    const response = await axios.post("/payment", data);
    window.location.href = `${response.data.init_point}`;
  };

  //-------PRUEBAS MP----------------------------------------------

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3 className="display-5">Tu carrito está vacío</h3>
          </div>
        </div>
      </div>
    );
  };
  const cartItems = (product) => {
    return (
      <>
        <div className="d-flex justify-content-start">
          <div className="p-2 border border-4 rounded shadow p-3 mb-5 bg-body rounded">
            <img
              src={product.image}
              alt={product.name}
              height="200px"
              width="180px"
            />
          </div>
          <div className="p-2 shadow-sm p-3 mb-5">
            <h3 className="display-5">{product.name}</h3>
            <p className="display-6">
              {product.qty} x $ {product.price} = ${product.qty * product.price}
            </p>
            <hr />
            <div className="lead">
              <button
                className="btn rounded-pill text-white m-3"
                style={{ backgroundColor: "indigo" }}
                onClick={() => handleDel(product)}
              >
                <i className="fa fa-minus"></i>
              </button>
              {product.qty}
              <button
                className="btn rounded-pill text-white m-3"
                style={{ backgroundColor: "indigo" }}
                onClick={() => handleAdd(product)}
              >
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
          {/*           <div className="p-2">Flex item 3</div>
           */}
        </div>

        {/*  <div className="px-4 my-5 bg-light rounded-3 py-5">
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
                  {product.qty} x $ {product.price} = $
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
        </div> */}
      </>
    );
  };
  const buttons = () => {
    return (
      <>
        <div className="container">
          <div className="d-flex flex-column">
            <h3 className="display-6">Total: ${price}</h3>
            <button
              className="btn btn-outline-dark rounded-pill text-white border-white p-1"
              onClick={handleDeleteAll}
              style={{ backgroundColor: "Indigo" }}
            >
              Vaciar Carrito
            </button>
            {!findUser ? (
              <>
                <div className="d-flex flex-column">
                  <button
                   
                    className="btn btn-outline-dark rounded-pill text-white border-white p-1"
                    style={{ backgroundColor: "Indigo" }}
                    data-bs-toggle="modal"
                    data-bs-target="#procederPago"
                  >
                    Proceder al pago
                  </button>
                </div>
                <div className="modal fade" id="procederPago">
                  <div className="modal-dialog bg-white">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h4 className="modal-title">Ingresar</h4>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                          ></button>
                        </div>
                        <div className="modal-body">
                          Por favor ingresa para proceder al pago
                        </div>
                        <div className="modal-footer">
                          <LoginButton />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={handlePayment}
                to="/checkout"
                className="btn btn-outline-dark rounded-pill text-white border-white p-1"
                style={{ backgroundColor: "Indigo" }}
              >
                Proceder al pago
              </button>
            )}
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

/* 

<div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th className="mob-hide"></th>
                <th className="mob-hide">Precio unitario</th>
                <th className="table-qty">Unidades</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            /* --------------------------------------------------------- */
/*
<tbody>
  {state && state?.map((i) => {
    return (
      <>
        <tr>
          <td>
            {i.name}                        
          </td>
          <td className="text-center mob-hide">
            <img src={i.image} alt={product.name} style={{ width: "80px" }} />
          </td>
          <td className="mob-hide">

            <span className="order-product-price">${i.price}</span>

          </td>
          <td>
            <button
              className="btn btn-outline-dark me-2"
              onClick={() => handleDel(product)}
            >
              <i className="fa fa-minus"></i>
            </button>
            {i.qty}
            <button
              className="btn btn-outline-dark"
              onClick={() => handleAdd(product)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </td>
          <td>
            <span className="order-product-subtotal">$ {i.qty * i.price}</span>
          </td>
          <td clas="text-right"> <a href="/cart/remove_product/120956782" className="cart-product-remove"
            title="Remove Product"><i className="fas fa-times-circle"></i></a></td>
        </tr>

      </>
    );
    })}
</tbody>
</table>
</div>



*/
