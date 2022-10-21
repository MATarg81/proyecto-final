import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const LoginButton = () => {

    const {loginWithRedirect} = useAuth0();

    return (
        <button className="btn btn-outline-dark ms-2" onClick={() => loginWithRedirect()}> 
            <i className="fa fa-sign-in me-1"></i>Ingresar
        </button>
    )
}

export default LoginButton;