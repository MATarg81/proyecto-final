<<<<<<< HEAD
import { GET_USERS , GET_USERS_BY_ID, EDIT_USERS } from "../actionsTypes/actionsTypesUsers"
=======
import { GET_USERS, GET_USERS_BY_ID, EDIT_USERS, GET_ALL_ROLES, ORDER_USERS_BY_NAME } from "../actionsTypes/actionsTypesUsers"
import { orderUser } from "../actionsCreator/usersActions";


>>>>>>> d1da99864c1da2e98cbb9fa4aa4740a29a70f772

export const initialState = {
  users: [],
  usersById: [],
<<<<<<< HEAD
  usersEdited: [], 
=======
  usersEdited: [],
  roles: [],
  //usersOrdered: [],
>>>>>>> d1da99864c1da2e98cbb9fa4aa4740a29a70f772
}


const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: 
      return {
        ...state,
        users: action.payload,
      };
    
    case GET_USERS_BY_ID: {
      return {
        ...state,
        usersById: action.payload,
      };
    }

<<<<<<< HEAD
    case EDIT_USERS: {
=======
    case EDIT_USERS:
>>>>>>> d1da99864c1da2e98cbb9fa4aa4740a29a70f772
      return {
        ...state,
        usersEdited: action.payload,
      }
<<<<<<< HEAD
    }

=======
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



>>>>>>> d1da99864c1da2e98cbb9fa4aa4740a29a70f772
    default:
      return  state;
  }
};

export default usersReducer;




