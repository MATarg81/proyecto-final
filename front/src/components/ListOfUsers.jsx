import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditProfile from "./EditProfile"
import { get_users, get_roles, orderUsersByName } from "../redux/actionsCreator/usersActions"

export default function ListOfUsers() {

    const allUsers = useSelector((state) => state.usersReducer.users);
    const roles = useSelector((state) => state.usersReducer.roles);

    const [order, setOrder] = useState("");
    const dispatch = useDispatch();

    useEffect(() => {
        if (allUsers?.length === 0) {
            dispatch(get_users());
        }
        if (roles?.length === 0) {
            dispatch(get_roles());
        }
    }, [dispatch, roles, allUsers]);

    useEffect(() => {
        if (order === "A/Z") {
            dispatch(orderUsersByName(order));
        }
        if (order === "Z/A") {
            dispatch(orderUsersByName(order));
        }
    }, [order, dispatch]);



    return (
        <>
            <table className="table table-responsive table-striped">
                <thead>
                    <tr className="d-flex">
                        <th className="col-1">
                            Nombre
                            <select
                                type="button"
                                className="btn btn-outline-dark btn-sm border-0"
                                style={{ width: "30%" }}
                                onChange={(e) => setOrder(e.target.value)}
                            >
                                <option value="-">⇅</option>
                                <option value="A/Z">A-Z</option>
                                <option value="Z/A">Z-A</option>
                            </select>
                        </th>
                        <th className="col-1" style={{ width: "13%" }}
                        >
                            Apellido
                            <select
                                type="button"
                                className="btn btn-outline-dark btn-sm border-0"
                                style={{ width: "30%" }}
                                onChange={(e) => setOrder(e.target.value)}
                            >
                                <option value="-">⇅</option>
                                <option value="MIN/MAX">Asc.</option>
                                <option value="MAX/MIN">Desc.</option>
                            </select>
                        </th>
                        <th className="col-1" style={{ width: "18%" }}>
                            email
                            <select
                                type="button"
                                className="btn btn-outline-dark btn-sm border-0"
                            >
                            </select>
                        </th>
                        <th className="col-1" style={{ width: "12%" }}>
                            Numero de telefono
                            <select
                                type="button"
                                className="btn btn-outline-dark btn-sm border-0"
                                style={{ width: "30%" }}
                            >
                            </select>
                        </th>
                        <th className="col-1">
                            Codigo postal
                            <select
                                type="button"
                                className="btn btn-outline-dark btn-sm border-0"
                                style={{ width: "30%" }}
                            >
                            </select>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers &&
                        allUsers.map((p) => {
                            return (
                                <>
                                    <tr className="d-flex">
                                        <td className="col-1 text-truncate">{p.name}</td>
                                        <td className="col-1">{p.lastname}</td>
                                        <td className="col-1">{p.email}</td>
                                        <td className="col-1">{p.dateOfBitrh}</td>
                                        <td className="col-1">{p.phoneNumber}</td>
                                        <td className="col-1">{p.adress}</td>
                                        <td className="col-1">{p.postalCode}</td>

                                        <td className="col-1">{p.stock}</td>
                                        <td className="col-2">
                                            <button
                                                type="button"
                                                className="btn btn-primary"
                                                data-bs-toggle="modal"
                                                data-bs-target="#editProduct"
                                            >
                                                Editar
                                            </button>
                                            <div
                                                className="modal fade"
                                                id="editProduct"
                                                tabindex="-1"
                                                aria-labelledby="editProductLabel"
                                                aria-hidden="true"
                                            >
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h5 className="modal-title" id="editProductLabel">
                                                                Editar usuario
                                                            </h5>
                                                            <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                            ></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            {/*   <ProfileEditProduct /> */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                </>
                            );
                        })}
                </tbody>
            </table>
        </>
    )
}