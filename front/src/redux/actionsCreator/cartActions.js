import axios from "axios";
import { ADD_ITEM, DELETE_ITEM, DELETE_ALL, POST_CART, GET_CART, TOTAL_PRICE } from "../actionsTypes/actionsTypesCart";

// Agregar item al carro

export const addCart = (product) => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
};

export const getCart = (userId) => {
  return async function (dispatch) {
    try {
      const {data} = await axios.get(`http://localhost:3001/cart/${userId}` );//hardcodeo provisorio de user
      return dispatch({
        type: GET_CART,
        payload: data,
      });
    } catch (err) {
      
      alert(err)
    }
  };
}
  


export const delCart = (product) => {
  return {
    type: DELETE_ITEM,
    payload: product,
  };
};

export function totalPrice(price) {
  return{
    type: TOTAL_PRICE,
    payload: price
  }
}

// Eliminar todo del carro 

export const delAll = () => {
  return {
    type: DELETE_ALL,
  }
}

// Obtener cart del localStorage

// export const localStorageCart = (cart) => {
//   return {
//     type: LOCAL_STORAGE_CART,
//     payload: cart
//   }
// }

export const postCart = (body) => {

  return async function (dispatch) {
    try {
      const res = await axios.post("/cart", body);
      return dispatch({
        type: POST_CART,
        payload: res,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}