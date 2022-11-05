import axios from "axios";

import {
    ADD_FAV,
    REMOVE_FAV
} from "../actionsTypes/actionsTypesFavs.js";

// const BACK_URL = "http://localhost:3001";

export function addFav(id, idU) {
    return async function (dispatch) {
        try {
            const url = await axios.get("/favorites/" + id, idU);
            return dispatch({
                type: ADD_FAV,
                payload: url.data,
            });
        } catch (err) {
            console.log(err);
            return err;
        }
    };
}


export function deleteFav(id) {
    console.log(id);
    return {
        type: REMOVE_FAV,
        payload: id
    }
}
