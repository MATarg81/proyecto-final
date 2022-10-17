import { GET_PRODUCTS , GET_PRODUCTS_BY_ID } from "../actionsTypes/actionsTypesProducts.js"

export const initialState = {
  products: [],
  productsById: [],
}


const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        products: action.payload,
      };
    }

    case GET_PRODUCTS_BY_ID: {
      return {
        ...state,
        productsById: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default productsReducer;


