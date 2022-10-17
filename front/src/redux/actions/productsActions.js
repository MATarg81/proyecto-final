import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_DETAIL = 'GET_DETAIL';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const POST_PRODUCT = 'POST_PRODUCTS';
export const ORDER_BY_NAME = 'ORDER_BY_NAME';
export const ORDER_BY_PRICE = 'ORDER_BY_PRICE';
export const FILTER_BY_CATEGORIES = 'FILTER_BY_CATEGORIES';
export const NEXT_PAGE = 'NEXT_PAGE';
export const PREV_PAGE = 'PREV_PAGE';
export const GET_PRODUCT_BY_NAME = 'GET_PRODUCT_BY_NAME'


const BACK_URL = 'http://localhost:3001';

export function getProducts() {
    return async function (dispatch) {
        try {
            const url = await axios.get(BACK_URL + "/products");
            return dispatch({
                type: GET_PRODUCTS,
                payload: url.data,
            });
        } catch(err) {
            console.log(err);
            return err;
        }
    };
};



export function getDetail(id) {
    return async function (dispatch) {
        try {
            const url = await axios.get(BACK_URL + "/products/" + id);
            return dispatch({
                type: GET_DETAIL,
                payload: url.data,
            });
        } catch(err) {
            console.log(err);
            return err;
        }
    };
}

export function getCategories() {
    return async function (dispatch) {
        try {
            const url = await axios.get(BACK_URL + "/categories");
            return dispatch({
                type: GET_CATEGORIES,
                payload: url.data,
            });
        } catch(err) {
            console.log(err);
            return err;
        }
    };
}

export function createProduct(body) {
    return async function (dispatch) {
        try {
            const res = await axios.post(BACK_URL + "/products", body);
            return dispatch({
                type: POST_PRODUCT,
                payload: res,
            });
        } catch(err) {
            console.log(err);
            return err;
        }
    };
}

export function orderByName(payload) {
    return {
        type: ORDER_BY_NAME,
        payload,
    }
}

export function orderByPrice(payload) {
    return {
        type: ORDER_BY_PRICE,
        payload,
    }
}

export function filterByCategories(payload) {
    return {
        type: FILTER_BY_CATEGORIES,
        payload
    }
}

export function nextPage(payload) {
    return {
        type: NEXT_PAGE,
        payload,
    }
}

export function prevPage(payload) {
    return {
        type: NEXT_PAGE,
        payload,
    }
}