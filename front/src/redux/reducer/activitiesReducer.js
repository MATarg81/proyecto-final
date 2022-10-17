const initialState = {
    activities: [],
}

//state y action-- tiene type y payload
function activitiesReducer(state= initialState, { type, payload }){
    console.log(state.activities, 'state reducer')
    switch(type) {
        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: payload
            }
            
        default: 
        return state;        
}
}
export default activitiesReducer;