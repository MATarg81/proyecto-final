import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { cartDetail } from "../../redux/actionsCreator/cartActions";

export default function PurchesesDetail() {
  const dispatch = useDispatch();

  const { id } = useParams();

  useEffect(() => {
    dispatch(cartDetail(id));
  }, [dispatch, id]);

  const purchesDetail = useSelector((state) => state.cartReducer.purchesDetail);
  console.log(purchesDetail, " soy purches detail");

  return (
    <div>
      {purchesDetail.products?.length &&
        purchesDetail.products.map((el) => {
          return(
          <div>

          <h1>{el.name}</h1>
          <h1>{el.price}</h1>
          <h1>{el.detail}</h1>
          <img src={el.image} alt=""/>
          
          </div>
)        })}
    </div>
  );
}
