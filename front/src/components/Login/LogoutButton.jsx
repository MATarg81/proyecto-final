import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'

const LogoutButton = () => {

    const { logout } = useAuth0();

    return (
        <button className="btn btn-outline-dark ms-2 rounded-pill" onClick={() => logout( {returnTo: window.location.origin })}> 
            <i className="fa fa-sign-out"></i>Salir
        </button>
    )
}

export default LogoutButton;