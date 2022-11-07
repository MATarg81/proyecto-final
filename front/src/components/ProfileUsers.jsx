import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_roles, get_users, orderUsersByName } from "../redux/actionsCreator/usersActions";
import EditProfile from "./EditProfile";
import EditProfileAdmin from "./EditProfileAdmin";

export default function ProfileUsers() {
  const roles = useSelector(state => state.usersReducer.roles)
  const users = useSelector(state => state.usersReducer.users)

  const [order, setOrder] = useState("");

  const dispatch = useDispatch()

  useEffect(() => {
    if(roles?.length === 0) {
      dispatch(get_roles())
    }
    if(users?.length === 0) {
      dispatch(get_users())
    }
  }, [users, roles, dispatch])

 useEffect(() => {
    if (order === "A/Z") {
      dispatch(orderUsersByName(order));
    }
    if (order === "Z/A") {
      dispatch(orderUsersByName(order));
    }
  }, [order, dispatch]);


  return (
    <div className="container-fluid">
      <button
        type="button"
        class="btn btn-outline-dark"
        data-bs-toggle="modal"
        data-bs-target="#editProfileAdmin"
      >
        Editar
      </button>
      <div>
        <table className="table table-responsive-sm table-striped table-hover">
          <thead >
            <tr className="d-flex col-sm-11">

              <th className="col-sm-2">
                Nombre
                <select
                  type="button"
                  className="btn btn-outline-dark btn-sm border-0 w-25"
                  style={{ width: "30%"}}
                  onChange={(e) => setOrder(e.target.value)}
                >
                  <option value="-">⇅</option>
                  <option value="A/Z">A-Z</option>
                  <option value="Z/A">Z-A</option>
                </select>
              </th>

              <th className="col-sm-2">
                Apellido
                <select
                  type="button"
                  className="btn btn-outline-dark btn-sm border-0 w-25"
                  style={{ width: "30%" }}
                  onChange={(e) => setOrder(e.target.value)}
                >
                  <option value="-">⇅</option>
                  <option value="A/Z">A-Z</option>
                  <option value="Z/A">Z-A</option>
                </select>
              </th>

              <th className="col-sm-2">Email</th>
              <th className="col-sm-1">Nac.</th>
              <th className="col-sm-1">Teléfono</th>
              <th className="col-sm-2">Dirección</th>
              <th className="col-sm-1">C.P.</th>
              <th className="col-sm-1">Rol</th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users?.map((u) => {
                return (
                  <>
                    <tr className="d-flex col-sm-11">
                      <td className="col-sm-2 text-truncate">{u.name}</td>
                      <td className="col-sm-2">{u.lastname}</td>
                      <td className="col-sm-2 text-truncate">{u.email}</td>
                      <td className="col-sm-1">{u.dateOfBirth}</td>
                      <td className="col-sm-1">{u.phoneNumber}</td>
                      <td className="col-sm-2">{u.address}</td>
                      <td className="col-sm-1">{u.postalCode}</td>
                      <td className="col-sm-1">{u.role?.name}</td>
                    </tr>
                  </>
                );
              })}
            <div
              class="modal fade"
              id="editProfileAdmin"
              tabindex="-1"
              aria-labelledby="editProfileAdminLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editProfileAdminLabel">
                      Editar usuario
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <EditProfileAdmin />
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  )
}