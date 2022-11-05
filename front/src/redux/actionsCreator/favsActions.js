import axios from "axios";

import {
    ADD_FAV,
    REMOVE_FAV
} from "../actionsTypes/actionsTypesFavs.js";

// const BACK_URL = "http://localhost:3001";

export function addFav(id, idU, product) {
    console.log(id, idU)
    return async function (dispatch) {
        try {
            if(idU){
                const url = await axios.get(`/favorites?id=${id}&idU=${idU}`);
                console.log(url.data, 'axios')
                return dispatch({
                    type: ADD_FAV,
                    payload: url.data,
                });
            }
            // else{
            //     return dispatch({
            //         type: 'ADD_FAV_LS',
            //         payload: product,
            //     });
            // }

        } catch (err) {
            console.log(err);
            return err;
        }
    };
}


export function deleteFav(id, idU) {
    return async function (dispatch) {
        try {
            if(idU){
                const url = await axios.delete(`/favorites?id=${id}&idU=${idU}`);
                console.log(url.data, 'axios')
                return dispatch({
                    type: REMOVE_FAV,
                    payload: id,
                });
            }
            // else{
            //     return dispatch({
            //         type: REMOVE_FAV,
            //         payload: id,
            //     });
            // }

        } catch (err) {
            console.log(err);
            return err;
        }
    };

}
