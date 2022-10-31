import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { get_users, get_users_by_id } from '../redux/actionsCreator/usersActions'

export default function EditProfile() {
    const usersState = useSelector((state) => state.usersReducer.usersById);
    //const [image, setImage] = React.useState(); //para cargar la imagen nueva (aunque deberiamos agregar imagen en la db)
    const dispatch = useDispatch();
    //const usersRoles = useSelector((state) => state.)

//FALTA AGREGAR QUE EDITE LOS DATOS DEL USUARIO LOGUEADO 

    const [input, setInput] = useState({name:"" , lastName:"", dateOfBirth:"", phoneNumber:"", email:"", adress:"", postalCode:"", password:"" })

    /* useEffect (() => {
       dispatch(get_users_by_id(7)) 
    },[]) */

    
   /*  const imageOnChange = (file) => {
        setImage(file);
    }; */
    const handleOnChange = (e) => {
        dispatch(
            setInput({
                ...usersState,
                [e.target.name]: e.target.value,

            })
        );
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
                        {/*  <label>Foto de Perfil </label>
                        <input
                            type="file"
                            multiple
                            onChange={(e) => imageOnChange(e.target.files)}
                        /> */}
                        <label>Nombre</label>
                        <input
                            name="name"
                            onChange={(e) => handleOnChange(e)}
                            value={input?.name}
                            type="text"
                        />
                        <label>Apellido</label>
                        <input
                            name="lastname"
                            onChange={(e) => handleOnChange(e)}
                            value={input?.lastname}
                            type="text"
                        />
                    </label>
                    <label>Teléfono</label>
                    <input
                        name="phone"
                        onChange={(e) => handleOnChange(e)}
                        value={input?.phoneNumber}
                        type="text"
                    />

                    <label>E-mail</label>
                    <input
                        name="email"
                        onChange={(e) => handleOnChange(e)}
                        value={input?.email}
                        type="text"
                    />
                    <label>Direccion</label>
                    <input
                        name="adress"
                        onChange={(e) => handleOnChange(e.target.name, e.target.value)}
                        value={input?.address}
                        type="text"
                    />
                    <label>Codigo Postal</label>
                    <input
                        name="postalCode"
                        onChange={(e) => handleOnChange(e.target.name, e.target.value)}
                        value={input?.postalCode}
                        type="text"
                    />

                    <label>Contraseña</label>
                    <input
                        name="password"
                        onChange={(e) => handleOnChange(e.target.name, e.target.value)}
                        value={input?.password}
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



