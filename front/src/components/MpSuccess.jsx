import React, { useEffect } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { useSelector, useDispatch } from "react-redux";
import { delAll, postCart } from "../redux/actionsCreator/cartActions";
import { Link } from "react-router-dom";

function MpSuccess() {
  const state = useSelector((state) => state.cartReducer);
  console.log("State en MpSuccess: ", state);
  const [, setCart] = useLocalStorage("cart", state);
  const dispatch = useDispatch();

    useEffect(() => {
      posteo()
      setCart([]);
      dispatch(delAll());
  }, []);

  function posteo() {
    console.log("Posteo: ", 1)
    dispatch(postCart(state))
  }

  return (
    <div>
      <h1>El pago fue exitoso!</h1>
      <hr />
      <Link to="/home">
        <button>Volver al Home</button>
      </Link>
    </div>
  );
}

export default MpSuccess;
