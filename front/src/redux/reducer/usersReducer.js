import { GET_USERS , GET_USERS_BY_ID, GET_ALL_ROLES } from "../actionsTypes/actionsTypesUsers"

export const initialState = {
  users: [],
  usersById: [],
  roles: []
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

    case GET_ALL_ROLES: {
      return {
        ...state,
        roles: action.payload
      }
    }

    default:
      return { ...state };
  }
};

export default usersReducer;




