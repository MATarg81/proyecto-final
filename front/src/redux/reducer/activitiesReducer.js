const initialState = {
    activities: [],
    filtActivities: [],
}

//state y action-- tiene type y payload
function reducer(state= initialState, { type, payload }){
    console.log(payload, 'aaaaaaaa')
    switch(type) {
        case 'GET_ACTIVITIES':
            return {
                ...state,
                activities: payload,
                filtActivities: payload,
            }

        default: 
        return state;        
}
}
export default reducer;