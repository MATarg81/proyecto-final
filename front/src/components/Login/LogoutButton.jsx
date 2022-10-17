import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const LogoutButton = () => {

    const {logout} = useAuth0();

    return (
        <button className="btn btn-outline-dark ms-2" onClick={() => logout()}> 
            <i className="fa fa-user-plus me-1"></i>Salir de mi cuenta
        </button>
    )
}

export default LogoutButton;