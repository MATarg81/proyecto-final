import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { get_users, get_users_by_id } from '../redux/actionsCreator/usersActions'



export default function EditProfile() {
    const usersState = useSelector((state) => state.usersReducer.users);
    const [image, setImage] = React.useState(); //para cargar la imagen nueva (aunque deberiamos agregar imagen en la db)
    const dispatch = useDispatch();

    const editUser = (payload) => {
        return { type: 'GET_USERS', payload };
    };

    const imageOnChange = (file) => {
        setImage(file);
    };
    const handleOnChange = (e, i) => {
        dispatch(
            editUser({
                ...usersState,
                [e]: i,
            })
        );
    };
    const addressOnChange = (name, value) => {
        handleOnChange('address', { ...usersState.address, [name]: value });
    };
    
    const onHandleSubmit = async (e) => {
        e.preventDefault();

        //ACA IRIA LA LOGICA PARA AGREGAR IMAGEN

    };


    return (
        <div>
            <title>Actualizar Perfil</title>
            <div class="">
                <h1 class="">Actualizar Perfil</h1>
                <form onSubmit={(e) => onHandleSubmit(e)}>
                    <label class="">
                        <label>Foto de Perfil (.jpg .jpeg .png)</label>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => imageOnChange(e.target.files)}
                        />
                        <label>Nombre</label>
                        <input
                            required
                            name="name"
                            onChange={(e) => handleOnChange(e.target.name, e.target?.value)}
                            value={usersState?.name}
                        />
                        <label>Apellido</label>
                        <input
                            required
                            name="last_name"
                            onChange={(e) => handleOnChange(e.target.name, e.target?.value)}
                            value={usersState?.last_name}
                        />
                    </label>
                    <label>Teléfono</label>
                    <input
                        name="phone"
                        onChange={(e) => handleOnChange(e.target.name, e.target?.value)}
                        value={usersState?.phone}
                        type="text"
                    />
                    <label>Direccion</label>
                    <input
                        name="street"
                        onChange={(e) => addressOnChange(e.target.name, e.target.value)}
                        value={usersState?.address}
                        type="text"
                    />
                    <div class="">
                        <button type="submit">Editar</button>
                    </div>
                </form>
            </div>

        </div>
    );
}



