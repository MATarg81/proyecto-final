import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_users } from "../../../redux/actionsCreator/usersActions";
import { Link } from "react-router-dom";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  //console.log(user)
  // const { name, picture, email } = user;
  const stateUser = useSelector((state) => state.usersReducer.users);
  const findUser = user ? stateUser.find((u) => u.email === user.email) : null;

  useEffect(() => {
    dispatch(get_users());
  }, [dispatch]);

  // console.log(stateUser, 'stado de userrrrrrss')
  // console.log(findUser, 'userrrrrr')

  return isAuthenticated && findUser ? (
    <div>
      <div
        className="row align-items-center profile-header"
        style={{ width: "20rem" }}
      >
        <div className="col-md-2 mb-3 m-1">
          <Link to="/profile">
            <div className="position-relative">
              <img
                src={user?.picture ? user?.picture : findUser?.image}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Ingresar al perfil"
              />
              <button className="btn position-absolute btn-sm ">Perfil</button>
            </div>
          </Link>
        </div>
        <div className="col-md text-center text-md-left">
          <h5>
            {findUser?.name} {findUser?.lastname}
          </h5>
        </div>
      </div>
      <div className="row">
        {/* <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre> */}
      </div>
    </div>
  ) : isAuthenticated && !findUser ? (
    <>
      <img
        src={user?.picture ? user?.picture : findUser?.image}
        alt="Profile"
        className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
        data-toggle="tooltip"
        data-placement="bottom"
        title="Ingresar al perfil"
        style={{width:"40px"}}
      />
      <Link to="/registro">
        <div class="mb-0">
          <button class="p-0 mb-0 rounded btn mb-4">
            <p class="m-0" style={{ fontSize: "11px" }}>Completar</p> <p class="m-0" style={{ fontSize: "11px" }}>perfil</p>
          </button>
        </div>
      </Link>
    </>
  ) : null
    ;
};

export default Profile;

//
