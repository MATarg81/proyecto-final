import {
  ADD_USER_ACTIVITY
} from "../actionsTypes/actionsTypesActRegister.js";

const initialState = { 
  registerActivity: [],
  // registerActivityLs: localStorage.registerActivity 
  //   ? JSON.parse(localStorage.registerActivity)
  //   : [],
}

function registerActivityReducer(state= initialState, action){
  switch (action.type) {
      case ADD_USER_ACTIVITY: 
      const activity = action.payload
          return {
            ...state,
            registerActivity: [...state.registerActivity, activity]
        }
      // case 'ADD_USER_ACTIVITY_LS': 
      // const activity2 = action.payload
      //     return {
      //       ...state,
      //       registerActivity: [...state.registerActivityLs, activity2]
      //   }
      default:
        return state
  }
}

export default registerActivityReducer;