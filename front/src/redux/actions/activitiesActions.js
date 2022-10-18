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

export function postActivity(payload){
    return async function(dispatch){
        const axiosPost = await axios.post('http://localhost:3001/activities',payload)
        return axiosPost
    }
}

export function deleteActivity(id){
    return async function(dispatch){
        try {
            await axios.delete('http://localhost:3001/activities/'+id);
            return dispatch({
                type: 'DELETE_ACTIVITY',
                payload: id
            })
        } catch (e) {
            console.log(e, 'error en delete activity action')
        }
    }
}