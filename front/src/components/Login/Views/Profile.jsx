import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_users } from '../../../redux/actionsCreator/usersActions';
import { Link } from "react-router-dom"

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

const Profile = () => {

  const {user, isAuthenticated} = useAuth0();
  const dispatch = useDispatch();
  //console.log(user)
  // const { name, picture, email } = user;
  useEffect(()=>{
    dispatch(get_users())
  },[])

  const stateUser = useSelector( state => state.usersReducer.users)
  const findUser = user? stateUser.find( u => u.email === user.email) : null
  console.log(stateUser, 'stado de userrrrrrss')
  console.log(findUser, 'userrrrrr')

  return (

    isAuthenticated && (<div>
      <div className="row align-items-center profile-header" style={{ width: '20rem' }}>
        <div className="col-md-2 mb-3 m-1">
          <Link to="/profile">
          
          <img
            src={user?.picture ? user?.picture : findUser?.image}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            data-toggle="tooltip" data-placement="bottom" title="Ingresar al perfil"
          />
          </Link>
        </div>
        <div className="col-md text-center text-md-left">
          <h5>{findUser?.name} {findUser?.lastname}</h5>
        </div>
      </div>
      <div className="row">
        {/* <pre className="col-12 text-light bg-dark p-4">
          {JSON.stringify(user, null, 2)}
        </pre> */}
      </div>
    </div>)
    
  );
};


export default Profile;