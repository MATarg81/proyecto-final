const initialState = {
    activities: [],
}

//state y action-- tiene type y payload
function activitiesReducer(state= initialState, { type, payload }){
    switch(type) {
        case 'GET_ACTIVITIES':
            console.log(payload, 'aaaaaaaa')
            return {
                ...state,
                activities: payload
            }

        default: 
        return state;        
}
}
export default activitiesReducer;