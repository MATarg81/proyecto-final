import React, { useEffect } from "react";
import { useLocalStorage } from "../localStorage/useLocalStorage";
import { useSelector, useDispatch } from "react-redux";
import { delAll, postCart } from "../redux/actionsCreator/cartActions";

function MpSuccess() {
  const state = useSelector((state) => state.cartReducer.items);
  const [, setCart] = useLocalStorage("cart", state);
  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(postCart(state))
    }, [])

  useEffect(() => {
    if (state.length !== 0) {
      setCart([]);
      dispatch(delAll());
    }
  }, []);

  return <div>El pago fue exitoso!</div>;
}

export default MpSuccess;
