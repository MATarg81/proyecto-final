import { GET_USERS, GET_USERS_BY_ID, EDIT_USERS, GET_ALL_ROLES, ORDER_USERS_BY_NAME } from "../actionsTypes/actionsTypesUsers"
import { orderUser } from "../actionsCreator/usersActions";



export const initialState = {
  users: [],
  usersById: [],
  usersEdited: [],
  roles: [],
  //usersOrdered: [],
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

    case EDIT_USERS:
      return {
        ...state,
        usersEdited: action.payload,
      }
    case GET_ALL_ROLES: {
      return {
        ...state,
        roles: action.payload
      }
    }

    case ORDER_USERS_BY_NAME: {
      if (action.payload === "A/Z") {
        return {
          ...state,
          users: state.users.slice().sort(orderUser),
          
        };
      } else if (action.payload === "Z/A") {
        return {
          ...state,
          users: state.users.slice().sort(orderUser).reverse(),
          
        };
      }
    }// eslint-disable-next-line



    default:
      return  state;
  }
};

export default usersReducer;




