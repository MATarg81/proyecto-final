const initialState = {
    activities: [],
}

function activitiesReducer(state= initialState, { type, payload }){
    console.log(state.activities, 'state reducer')
    switch(type) {
        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: payload
            }
        
        case 'DELETE_ACTIVITY':
            return {
                ...state,
                activities: state.activities.filter(a => a.name !== payload)
            }
            
        default: 
        return state;        
}
}
export default activitiesReducer;