import React from 'react';
import {useAuth0} from '@auth0/auth0-react';

const EditButton = () => {

    const {edit} = useAuth0();

    return (
        <button className="btn btn-outline-dark ms-2" onClick={() => edit()}> 
            <i class=""></i>Editar Perfil
        </button>
    )
}

export default EditButton;