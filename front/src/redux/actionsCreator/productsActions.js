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
  FILTER_BY_PRICE
} from "../actionsTypes/actionsTypesProducts";

// const BACK_URL = "http://localhost:3001";

export function getProducts() {
  return async function (dispatch) {
    try {
      const url = await axios.get("/products");
      // console.log(url.data)

      return dispatch({
        type: GET_PRODUCTS,
        payload: url.data,
      });
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}

export function searchProducts(search) {
  return function (dispatch) {
    axios
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
        console.log(e.response.data);
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

export function orderName(a, b) {
  if(a.name < b.name) return -1
  if(b.name < a.name) return 1 
  return 0
}

export function orderPrice(a, b) {
  if(parseInt(a.price) < parseInt(b.price)) return -1
  if(parseInt(b.price) < parseInt(a.price)) return 1 
  return 0
}