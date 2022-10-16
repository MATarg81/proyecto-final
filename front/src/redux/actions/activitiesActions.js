import axios from 'axios';

export function getActivities(){
    return async function(dispatch){
        try {
            let axiosActivities = await axios('http://localhost:3000/activities')
        } catch (e) {
            
        }
    }
}