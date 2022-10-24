import { ADD_ITEM, DELETE_ITEM } from "../actionsTypes/actionsTypesCart";

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
