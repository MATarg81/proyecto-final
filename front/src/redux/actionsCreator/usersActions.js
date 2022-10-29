import axios from "axios";
import { GET_USERS, GET_USERS_BY_ID, DELETE_USERS, EDIT_USERS } from "../actionsTypes/actionsTypesUsers.js"

// export const GET_USERS = "GET_USERS";
// export const GET_USERS_BY_ID = "GET_USERS_BY_ID";
// export const ADD_USERS = "ADD_USERS";
// export const DELETE_USERS = "DELETE_USERS";


export function get_users(name, lastname, email) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `/users?name=${name || ''}&lastname=${lastname || ''}&email=${email || ''}`
      );
      return dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      alert(error)
    }
  };
}
export function get_users_by_id(id) {
  console.log("get_users_by_id" + id);
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`/users/:${id}`);
      console.log("soy details " + data);
      return dispatch({ type: GET_USERS_BY_ID, payload: data });
    } catch (error) {
      alert(error);
    }
  };
}

export function add_users(payload) {
  return function () {
    axios.post(`/users`, payload)
      .then(res => { alert(res.data) })
      .catch(e => { alert(e.response.data) })
  }
}

export const delete_users = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`/users/:${id}`);
      console.log("soy ID " + data);
      return dispatch({ type: DELETE_USERS, payload: data });
    } catch (error) {
      alert(error);
    }
  };
};

export function update_user(body) {
  return async function (dispatch) {
    try {
      const res = await axios.patch(`/users/:${body.id}`, body)
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





