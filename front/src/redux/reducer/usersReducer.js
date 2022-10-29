import { GET_USERS , GET_USERS_BY_ID, EDIT_USERS } from "../actionsTypes/actionsTypesUsers"

export const initialState = {
  users: [],
  usersById: [],
  usersEdited: [], 
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        users: action.payload,
      };
    }

    case GET_USERS_BY_ID: {
      return {
        ...state,
        usersById: action.payload,
      };
    }

    case EDIT_USERS: {
      return {
        ...state,
        usersEdited: action.payload,
      }
    }

    default:
      return { ...state };
  }
};

export default usersReducer;




