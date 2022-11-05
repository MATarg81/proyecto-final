import React from 'react';
<<<<<<< HEAD
import { useAuth0 } from '@auth0/auth0-react';
=======
//import { useAuth0 } from '@auth0/auth0-react';
>>>>>>> d1da99864c1da2e98cbb9fa4aa4740a29a70f772
import { Link } from 'react-router-dom'

const EditButton = () => {

<<<<<<< HEAD
    const { edit } = useAuth0();

    return (
        <Link to="/edituser">
            <button className="btn btn-outline-dark ms-2" onClick={() => edit()}>
                <i class=""></i>Editar Perfil
            </button>
        </Link>
    )
}

export default EditButton;
=======
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
>>>>>>> d1da99864c1da2e98cbb9fa4aa4740a29a70f772

