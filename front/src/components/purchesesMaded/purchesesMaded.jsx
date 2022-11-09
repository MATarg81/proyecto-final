import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCart } from "../../redux/actionsCreator/cartActions";
import { get_users } from "../../redux/actionsCreator/usersActions";
import { useAuth0 } from "@auth0/auth0-react";

export default function PurchesesMaded() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();
  const allUsers = useSelector((state) => state.usersReducer.users);
  const purchesesMaded = useSelector(
    (state) => state.cartReducer.purchesesMaded
  );

  const findUser = user ? allUsers?.find((u) => u.email === user.email) : null;

  useEffect(() => {
    if (purchesesMaded?.length === 0) {
      dispatch(getCart(findUser?.id));
    }
    if (allUsers?.length === 0) {
      dispatch(get_users());
    }
  }, [dispatch, purchesesMaded, allUsers]);

  return purchesesMaded?.length > 0
    ? purchesesMaded?.map((el) => {
        let s = parseInt(el.createdAt.slice(11, 13)) - 3;
        return (
          <div>
            <hr />
            <ul>
              <li>Fecha de compra: {el.createdAt.slice(0, 10)}</li>
              <li>Hora de compra: {s + ":" + el.createdAt.slice(14, 16)}</li>
              <li>Total pagado: $ {el.total}</li>
              <li>
                <Link to={`/detalleComprasRealizadas/${el.id}`}>
                  Detalle de la compra
                </Link>
              </li>
            </ul>
            <hr />
          </div>
        );
      })
    : "Aún no realizaste ninguna compra";
}
