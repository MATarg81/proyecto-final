import { ADD_ITEM, DELETE_ITEM, DELETE_ALL, LOCAL_STORAGE_CART } from "../actionsTypes/actionsTypesCart";

// Agregar item al carro

export const addCart = (product) => {
  return {
    type: ADD_ITEM,
    payload: product,
  };
};

// Eliminar item del carro

export const delCart = (product) => {
  return {
    type: DELETE_ITEM,
    payload: product,
  };
};

// Eliminar todo del carro 

export const delAll = () => {
  return {
    type: DELETE_ALL,
  }
}

// Obtener cart del localStorage

export const localStorageCart = (cart) => {
  return {
    type: LOCAL_STORAGE_CART,
    payload: cart
  }
}