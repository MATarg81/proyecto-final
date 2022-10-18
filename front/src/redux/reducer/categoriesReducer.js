import { GET_CATEGORIES } from "../actionsTypes/actionTypesCategories"

const initialState = {
    categories: [],
}

function activitiesReducer(state= initialState, { type, payload }){
    
    switch(type) {
        case GET_CATEGORIES:
            return {
                ...state,
                categories: payload
            }

            
        default: 
        return { ...state };      
}
}
export default activitiesReducer;