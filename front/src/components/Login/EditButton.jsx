import React from 'react';
//import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom'

const EditButton = () => {

    // const { edit } = useAuth0();

    function handleOnClick(e) {
        
    }

        return (
            <Link to="/edituser">
                <button className="btn btn-outline-dark rounded-pill text-white border-white p-1" /* onClick={() => handleOnClick(e)} */>
                    <i class=""></i>Editar Perfil
                </button>
            </Link>
        )
    }

    export default EditButton;

