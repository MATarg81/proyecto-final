import axios from "axios";
import {
  GET_PRODUCTS,
  GET_DETAIL,
  GET_CATEGORIES,
  POST_PRODUCT,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  FILTER_BY_CATEGORIES,
  NEXT_PAGE,
  PREV_PAGE,
  GET_PRODUCTS_BY_NAME,
  FILTER_BY_PRICE,
  EDIT_PRODUCT,
  POST_CATEGORY,
  DELETE_PRODUCTS
} from "../actionsTypes/actionsTypesProducts";



export function getProducts() {
  return async function (dispatch) {
    try {
      const url = await axios.get("/products");


      return dispatch({
        type: GET_PRODUCTS,
        payload: url.data,
      });
    } catch (err) {
      console.log(err.message);
      return err.message;
    }
  };
}

export function searchProducts(search) {
  return async function (dispatch) {
    await axios
      .get(`/products?name=${search}`)
      .then((products) => {
        dispatch({
          type: GET_PRODUCTS_BY_NAME,
          payload: products.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      const url = await axios.get("/products/" + id);
      return dispatch({
        type: GET_DETAIL,
        payload: url.data,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function getCategories() {
  return async function (dispatch) {
    return await axios
      .get("/categories")
      .then((res) => {
        dispatch({
          type: GET_CATEGORIES,
          payload: res.data,
        });
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
}

export function createProduct(body) {
  return async function (dispatch) {
    try {
      const res = await axios.post("/products", body);
      return dispatch({
        type: POST_PRODUCT,
        payload: res,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function addCategories(body) {
  return async function (dispatch) {
    try {
      const res = await axios.post("/categories", body);
      return dispatch({
        type: POST_CATEGORY,
        payload: res,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function updateProduct(body) {
  return async function (dispatch) {
    try {
      const res = await axios.patch(`/products`, body);
      return dispatch({
        type: EDIT_PRODUCT,
        payload: res,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export const delete_products = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.delete(`/products/${id}`);
      return dispatch({ type: DELETE_PRODUCTS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function orderByPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
  };
}

export function filterByCategories(payload) {
  return {
    type: FILTER_BY_CATEGORIES,
    payload,
  };
}

export function nextPage(payload) {
  return {
    type: NEXT_PAGE,
    payload,
  };
}

export function prevPage(payload) {
  return {
    type: PREV_PAGE,
    payload,
  };
}


export function filterByPrice(payload) {
  return {
    type: FILTER_BY_PRICE,
    payload,
  };
}

export function orderName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
}
}

export function orderPrice(payload) {
  return {
    type: ORDER_BY_PRICE,
    payload,
}
}