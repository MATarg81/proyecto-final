import React from 'react';
//import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'

const EditButton = () => {

    // const { edit } = useAuth0();

    function handleOnClick(e) {
        
    }

        return (
            <Link to="/edituser">
                <button className="btn btn-outline-dark ms-2" /* onClick={() => handleOnClick(e)} */>
                    <i class=""></i>Editar Perfil
                </button>
            </Link>
        )
    }

    export default EditButton;

