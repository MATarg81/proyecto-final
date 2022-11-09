import axios from "axios";
import {
  GET_USERS,
  GET_USERS_BY_ID,
  DELETE_USERS,
  EDIT_USERS,
  GET_ALL_ROLES,
  ORDER_USERS_BY_NAME,
} from "../actionsTypes/actionsTypesUsers.js";

// export const GET_USERS = "GET_USERS";
// export const GET_USERS_BY_ID = "GET_USERS_BY_ID";
// export const DELETE_USERS = "DELETE_USERS";

export function get_users(name, lastname, email) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `/users?name=${name || ""}&lastname=${lastname || ""}&email=${
          email || ""
        }`
      );
      
      return dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}
export function get_users_by_id(id) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get('/users/',id);
      console.log("soy details " + data);
      return dispatch({ type: GET_USERS_BY_ID, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
}


export function add_users(payload) {
  return function () {
    axios.post(`/users`, payload)
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };
}





export const delete_users = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`/users/${id}`);
      return dispatch({ type: DELETE_USERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export function update_user(body) {
  return async function (dispatch) {
    try {
      const res = await axios.patch(`/users`, body);
      return dispatch({
        type: EDIT_USERS,
        payload: res,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function get_roles() {
  return async function (dispatch) {
    axios
      .get("/roles")
      .then((res) => {
        dispatch({
          type: GET_ALL_ROLES,
          payload: res.data,
        });
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };
}

export function orderUsersByName(payload) {
  return {
    type: ORDER_USERS_BY_NAME,
    payload,
  };
}

export function orderUser(a, b) {
  if(a.name < b.name) return -1
  if(b.name < a.name) return 1 
  return 0
}