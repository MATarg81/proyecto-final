import axios from 'axios';

export function getActivities(){
    return async function(dispatch){
        try {
            let axiosActivities = await axios('http://localhost:3001/activities');
            
            return dispatch({
                type: 'GET_ACTIVITIES',
                payload: axiosActivities.data
            })
        } catch (e) {
            console.log(e, 'error en actions get activities')
        }
    }
}

export function deleteActivity(name){
    return async function(dispatch){
        try {
            await axios.delete('http://localhost:3001/activities/?name='+name);
            return dispatch({
                type: 'DELETE_ACTIVITY',
                payload: name
            })
        } catch (e) {
            console.log(e, 'error en delete activity action')
        }
    }
}