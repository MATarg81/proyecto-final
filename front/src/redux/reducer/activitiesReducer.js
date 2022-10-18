const initialState = {
    activities: [],
}

function activitiesReducer(state= initialState, { type, payload }){
    
    switch(type) {
        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: payload
            }

        case 'POST_RECIPE':
            return{
                ...state,
            }
        
        case 'DELETE_ACTIVITY':
            return {
                ...state,
                activities: state.activities.filter(a => a.id !== payload)
            }
            
        default: 
        return state;        
}
}
export default activitiesReducer;