import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_users } from '../../../redux/actionsCreator/usersActions';

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

  return (

    isAuthenticated && findUser && (<div>
      <div style={{display: 'flex' }} >
        <div className="col-md-2 mb-3">
          <img
            src={user?.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </div>
        <div >
          <h2>{findUser?.name}</h2>
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