import axios from "axios";

import {
    ADD_FAV,
    REMOVE_FAV
} from "../actionsTypes/actionsTypesFavs.js";

// const BACK_URL = "http://localhost:3001";

export function addFav(prod, idU) {
   
    return async function (dispatch) {
        try {
            if(idU){
                const url = await axios.post(`/favorites?id=${prod.id}&idU=${idU}`);
                console.log(url.data, 'axios')
                return dispatch({
                    type: ADD_FAV,
                    payload: url.data,
                });
            }
            else if(!idU){
                return dispatch({
                    type: 'ADD_FAV_LS',
                    payload: prod,
                });
            }

        } catch (err) {
            console.log(err);
            return err;
        }
    };
}

export function getAllfavs(idU){
    return async function(dispatch){
        try {
            const axiosFavs = await axios(`/favorites?idU=${idU}`)
            return dispatch({
                type: 'GET_FAVS',
                payload: axiosFavs.data
            })
        } catch (error) {
            console.log(error)
            return error
        }
}
}


export function deleteFav(p, idU) {
    return async function (dispatch) {
        try {
            if(idU){
                const url = await axios.delete(`/favorites?id=${p.id}&idU=${idU}`);
                
                return dispatch({
                    type: REMOVE_FAV,
                    payload: p.id,
                });
            }
            else if(!idU){
                return dispatch({
                    type: 'REMOVE_FAV_LS',
                    payload: p,
                });
            }

        } catch (err) {
            console.log(err);
            return err;
        }
    };

}
