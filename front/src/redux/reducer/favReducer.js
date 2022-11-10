//import { addFav, deleteFav } from "../actionsCreator/favsActions.js" //esto no se si esta bien traermelo

import {
    ADD_FAV,
    REMOVE_FAV
} from "../actionsTypes/actionsTypesFavs.js";

// aca aplico cosas de Local Storage, aun no se si funciona 

const favsInitialState = { 
    favs: [] ,
    userFavs: [],
    favsLs: localStorage.favs 
    ? JSON.parse(localStorage.favs)
    : [],
}

function favReducer(state= favsInitialState, action){
    switch (action.type) {
        case 'GET_FAVS':
          return {
            ...state,
            userFavs: action.payload
          }

        case ADD_FAV: 
            const item = action.payload          
            return {
              ...state,
              userFavs: [...state.userFavs, item] 
              }

        case 'ADD_FAV_LS':
          const item2 = action.payload
    
          return {
            ...state,
            favsLs: [...state.favsLs, item2]
          }

        case REMOVE_FAV:
            const favoritos = state.userFavs;    
            const filtro = favoritos.filter((item) => item.id !== action.payload); //aca borro
            
            return {
              ...state,
              userFavs: filtro
            };

        case 'REMOVE_FAV_LS':
            const prod = action.payload
            const filter = state.favsLs.filter( p => p.id !== prod.id)
            return {
                ...state,
                favsLs: filter
            }

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