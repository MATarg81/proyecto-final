import axios from "axios";
import {
  ADD_USER_ACTIVITY
} from "../actionsTypes/actionsTypesActRegister.js";

export function addUserActivity(id, idU) {
    return async function (dispatch) {
        try {
            if(idU){
                const url = await axios.get(`/profile/actividades?id=${id}&idU=${idU}`);
                return dispatch({
                    type: ADD_USER_ACTIVITY,
                    payload: url.data,
                });
            }
            // else if(!idU){
            //     return dispatch({
            //         type: 'ADD_USER_ACTIVITY_LS',
            //         payload: activity,
            //     });
            // }
        } catch (err) {
            console.log(err);
            return err;
        }
    }
};