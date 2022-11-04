import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getCart } from "../../redux/actionsCreator/cartActions";

export default function PurchesesMaded() {
  const dispatch = useDispatch();
  const purchesesMaded = useSelector(
    (state) => state.cartReducer.purchesesMaded
  );
  // const { userId } = useParams();

  useEffect(() => {
    if (purchesesMaded.length === 0) {
      dispatch(getCart(1)); //hardcodeo
      // dispatch(getCart(userId))
    }
  }, [dispatch, purchesesMaded]);

  return (
    <div>
      {purchesesMaded[0]?.products.map((purches) => {
        return (
          <div>
            <div id={purches.id}>
              <h1>{purches.name}</h1>
              <h1>{purches.price}</h1>
              <h1>{purches.detail}</h1>
              <img src={purches.image} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
}
