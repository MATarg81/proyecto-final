import axios from 'axios';

export function getActivities(){
    return async function(dispatch){
        try {
            let axiosActivities = await axios('http://localhost:3001/activities');
            console.log(axiosActivities.data, 'axioooos')
            return dispatch({
                type: 'GET_ACTIVITIES',
                payload: axiosActivities.data
            })
        } catch (e) {
            console.log(e, 'error en actions get activities')
        }
    }
}