import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    get_roles,
    get_users,
    get_users_by_id,
  } from "../redux/actionsCreator/usersActions";
import { useAuth0 } from '@auth0/auth0-react';

export default function ProfileActivities() {

    const dispatch = useDispatch();

    const usersState = useSelector((state) => state.usersReducer.usersById);
    const roles = useSelector((state) => state.usersReducer.roles);
    const allUsers = useSelector((state) => state.usersReducer.users);
    const{ user } = useAuth0()

    useEffect(() => {
      if (roles?.length === 0) {
        dispatch(get_roles());
      }
      if (allUsers?.length === 0) {
        dispatch(get_users());
      }
    }, [dispatch, allUsers, usersState, roles]);
  
    const findUser =  user ? allUsers?.find( u => u.email === user.email) : null
  
    useEffect(() => {
      if (usersState?.length === 0) {
        dispatch(get_users_by_id(findUser?.id));
      }
    }, [dispatch, findUser, usersState])

    return(
        <div>
        <div className="card">
            <div className="card-header">
                Actividades
            </div>
            <div className="card-body">
            {findUser?.activities?.map(e => 
              <div
              key={e.name}
              >
                <h5 className="card-title"> {e.name} </h5>
                <p className="card-text"> Dias: {e.days} </p>
                <p className="card-text"> Horarios: {e.times}</p>
                <br />
                </div>
                )}
            </div>
          </div>
      </div> 
)};