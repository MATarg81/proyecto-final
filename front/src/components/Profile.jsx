import { useEffect } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import generica from '../imagesTeam/Santi.png'
//import { useAuth0 } from '@auth0/auth0-react'; LO DEJO COMENTADO PERO ENTIENDO QUE LO VAMOS A USAR CUANDO ESTE TODO OK


export default function Perfil() {
    //NO DEBERIA GUARDARME EN UNA CONSTANTE UN ESTADO DONDE ESTE LA DATA DEL USUARIO¿¿
    const usersState = useSelector((state) => state.usersReducer.users);
    return (
        <div>
            <title>Perfil</title>

            <div class="">
                <div>
                    <div class="">
                        <div class="">
                            <img src={generica} alt="generica" />
                           

                        </div>
                        <div class="">
                            <div>
                                <h3> Nombre: </h3>
                                <h2>{usersState?.name}</h2>
                            </div>
                            <div>
                                <h3> Apellido: </h3>
                                <h2>{usersState?.lastname}</h2>
                            </div>
                            <div>
                                <h3> Email: </h3>
                                <h2>{usersState?.email}</h2>
                            </div>

                            <div>
                                
                            </div>

                            <div>
                                <h3> Télefono: </h3>
                                <h2>{usersState?.phone}</h2>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
