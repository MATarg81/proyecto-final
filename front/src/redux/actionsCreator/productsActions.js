import axios from "axios";
import { GET_PRODUCTS , GET_PRODUCTS_BY_ID , ADD_PRODUCTS, DELETE_PRODUCTS } from "../actionsTypes/actionsTypesProducts"

// export const GET_PRODUCTS = "GET_PRODUCTS";
// export const GET_PRODUCTS_BY_ID = "GET_PRODUCTS_BY_ID";
// export const ADD_PRODUCTS = "ADD_PRODUCTS";
// export const DELETE_PRODUCTS = "DELETE_PRODUCTS";


export function get_products(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/products?name=${name}`
      );
      return dispatch({ type: GET_PRODUCTS, payload: data });
    } catch (error) {
    alert(error)
    }
  };
}
export function get_products_by_id(id) {
  console.log("get_products_by_id" + id);
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/products/:${id}`);
      return dispatch({ type: GET_PRODUCTS_BY_ID, payload: data });
    } catch (error) {
      alert(error);
    }
  };
}

export function add_products(id, object) {
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `http://localhost:3001/products/:${id}`,
        object
      );
      return dispatch({ type: ADD_PRODUCTS, payload: data });
    } catch (error) {
      alert(error)
    }
  };
}

export const delete_products = (id) => {
    return async function (dispatch) {
        try {
          const { data } = await axios.delete(`http://localhost:3001/products/:${id}`);
          console.log("soy ID " + data);
          return dispatch({ type: DELETE_PRODUCTS, payload: data });
        } catch (error) {
          alert(error);
        }
      };
};

