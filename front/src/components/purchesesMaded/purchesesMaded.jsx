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
      <h6>total: {purchesesMaded[0]?.total}</h6>
      <h6>fecha de compra: {purchesesMaded[0]?.createdAt.slice(0, 10)}</h6>
      <h6>hora de compra: {purchesesMaded[0]?.createdAt.slice(11, 17)}</h6>

      <Link to={`/detalleComprasRealizadas/:${purchesesMaded.id}`}>
        detalle de la compra
      </Link>
    </div>
  );
}
