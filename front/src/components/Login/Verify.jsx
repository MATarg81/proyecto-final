import React, { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {add_users, get_users } from '../../redux/actionsCreator/usersActions' 
import { useNavigate } from "react-router-dom";
import Profile from "./Views/Profile";
import Register from "../Register";
//import axios from "axios";

import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

function Verify(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {user, isAuthenticated, isLoading} = useAuth0()
    //console.log(isAuthenticated,' is authhhhhh')
    
    
    const stateUser = useSelector( state => state.usersReducer.users)
    //console.log(stateUser, 'state user useselector')

    const checkUser = user && stateUser.find( u => u.email === user.email)
    //console.log(checkUser, 'encontrando usuario en db y auth')
 
    
    if(isLoading){
        return ( <p> Is Loading auth....</p>)
    }
   
    return ( isAuthenticated && checkUser ? <Profile /> : <Register/>
     
    );
}

export default withAuthenticationRequired(Verify, {
    onRedirecting: () => <p>is loading .....</p>,
  });
 