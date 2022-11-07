import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getActivities,
  orderByPrice,
} from "../redux/actions/activitiesActions";
import { orderByName } from "../redux/actionsCreator/productsActions";
import ActivityCreate from "./ActivityCreate";
import ProfileEditActivities from "./ProfileEditActivities";

export default function ProfileAllActivities() {
  const activities = useSelector((state) => state.activitiesReducer.activities);
  const [order, setOrder] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    if (activities?.length === 0) {
      dispatch(getActivities());
    }
  });

  useEffect(() => {
    if (order === "A/Z") {
      dispatch(orderByName(order));
    }
    if (order === "Z/A") {
      dispatch(orderByName(order));
    }
    if (order === "MIN/MAX") {
      dispatch(orderByPrice(order));
    }
    if (order === "MAX/MIN") {
      dispatch(orderByPrice(order));
    }
  }, [order, dispatch]);

  return (
    <div className="container-fluid">
      <div>
        <button
          type="button"
          class="btn btn-outline-dark"
          data-bs-toggle="modal"
          data-bs-target="#editActivities"
        >
          Editar
        </button>
        <ActivityCreate />
      </div>
      <div>
        <table className="table table-responsive-sm table-striped table-hover">
          <thead>
            <tr className="d-flex col-sm-10">
              <th className="col-sm-1">
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

              <th className="col-sm-1">
                Precio
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

              <th className="col-sm-2">Detalle</th>
              <th className="col-sm-1">Días</th>
              <th className="col-sm-1">Horarios</th>
              <th className="col-sm-1">Imágen</th>
            </tr>
          </thead>

          <tbody>
            {activities &&
              activities.map((a) => {
                return (
                  <>
                    <tr className="d-flex col-sm-10">
                      <td className="col-sm-1 text-truncate">{a.name}</td>
                      <td className="col-sm-1">{a.price}</td>
                      <td className="col-sm-2 text-truncate">{a.detail}</td>
                      <td className="col-sm-1 text-truncate">{a.days}</td>
                      <td className="col-sm-1 text-truncate">{a.times}</td>
                      <td className="col-sm-1 text-truncate">
                        <img
                          src={a.img}
                          className="img-fluid img-thumbnail"
                          alt=""
                        />
                      </td>
                    </tr>
                  </>
                );
              })}
            <div
              class="modal fade"
              id="editActivities"
              tabindex="-1"
              aria-labelledby="editActivitiesLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="editActivitiesLabel">
                      Editar actividad
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <ProfileEditActivities />
                  </div>
                </div>
              </div>
            </div>
          </tbody>
        </table>
      </div>
    </div>
  );
}
