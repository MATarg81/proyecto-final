import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    get_roles,
    get_users,
    get_users_by_id,
  } from "../redux/actionsCreator/usersActions";


export default function ProfileActivities() {

    const dispatch = useDispatch();

    const usersState = useSelector((state) => state.usersReducer.usersById);
    const roles = useSelector((state) => state.usersReducer.roles);
    const allUsers = useSelector((state) => state.usersReducer.users);

    useEffect(() => {
        if (allUsers?.length === 0) {
          dispatch(get_users());
        }
        if (roles?.length === 0) {
          dispatch(get_roles());
        }
        if (usersState?.length === 0) {
          dispatch(get_users_by_id(7));
        }
      }, [dispatch, allUsers, roles, usersState]);

    return(
        <div>
        <div class="card">
            <div class="card-header">
                Actividades
            </div>
            <div class="card-body">
                <h5 class="card-title">{usersState?.activities?.map(e => e.name)} </h5>
                <p class="card-text">Dias: {usersState?.activities?.map(e => e.days)}</p>
                <p class="card-text">Horarios: {usersState?.activities?.map(e => e.times)} hs.</p>
            </div>
            </div>
      </div> 
)};