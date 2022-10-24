//import { addFav, deleteFav } from "../actionsCreator/favsActions.js" //esto no se si esta bien traermelo

import {
    ADD_FAV,
    REMOVE_FAV
} from "../actionsTypes/actionsTypesFavs.js";

// aca aplico cosas de Local Storage, aun no se si funciona 

const favsInitialState = { 
    favs: [] 
}

function favReducer(state= favsInitialState, action){
    switch (action.type) {
        case ADD_FAV: 
            const item = action.payload          
            const product = state.favs.find(p => p.id === item.id); 
            if (product) {
              return {
                ...state,  
              }
            }
            //localStorage.setItem('favs', JSON.stringify(item)) //setItem se usa para almacenar informacion
           
            return {
              ...state,
                favs: [...state.favs, item] 
              }

        case REMOVE_FAV:
            const favoritos = state.favs;
            
            const filtro = favoritos.filter((item) => item.id !== action.payload); //aca borro
            
            

            return {
              ...state,
              favs: filtro
            };
        default: return state
    }
}

export default favReducer;

/* 

let mensaje = localStorage.getItem('bienvenida');
let bandera = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');
console.log(typeof mensaje); //string;
console.log(typeof bandera); //string;
console.log(typeof numero); //string;

*/