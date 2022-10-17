import { GET_USERS , GET_USERS_BY_ID } from "../actionsTypes/actionsTypesUsers"

export const initialState = {
  users: [],
  usersById: [],
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

    default:
      return { ...state };
  }
};

export default usersReducer;




