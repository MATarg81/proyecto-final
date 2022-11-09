import { orderName, orderPrice } from "../actionsCreator/productsActions";
import {
  GET_PRODUCTS,
  GET_DETAIL,
  GET_CATEGORIES,
  POST_PRODUCT,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  NEXT_PAGE,
  PREV_PAGE,
  GET_PRODUCTS_BY_NAME,
  FILTER_BY_CATEGORIES,
  FILTER_BY_PRICE,
  EDIT_PRODUCT,
  POST_CATEGORY
} from "../actionsTypes/actionsTypesProducts";

const initialState = {
  showProducts: [],
  allProducts : [],
  products: [],
  categories: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        showProducts: action.payload,
        products: action.payload,
        allProducts: action.payload
      };
    }

    case GET_PRODUCTS_BY_NAME: {
      return {
        ...state,
        showProducts: action.payload,
      };
    }

    case GET_DETAIL: {
      return {
        ...state,
        detail: action.payload,
      };
    }
    case GET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case POST_PRODUCT: {
      return {
        ...state,
      };
    }
    case POST_CATEGORY: {
      state.categories.push(action.payload)
      return{
        ...state,
      }
    }
    case EDIT_PRODUCT: {
      return {
        ...state,
      }
    }

    case ORDER_BY_NAME: {
      const productsName = 
      action.payload === 'A/Z'
      ? state.showProducts.sort((a, b) => a.name.localeCompare(b.name))
      : action.payload === 'Z/A' 
      ? state.showProducts.sort((a, b) => b.name.localeCompare(a.name))
      : state.showProducts;
      return {
        ...state,
        showProducts: productsName
    }

    }// eslint-disable-next-line
    case ORDER_BY_PRICE: {
      const productsOrderPrice = 
      action.payload === 'MIN/MAX'
      ? state.showProducts.sort((a, b) => a.price - b.price)
      : action.payload === 'MAX/MIN' 
      ? state.showProducts.sort((a, b) => b.price - a.name)
      : state.showProducts;
      return {
        ...state,
        showProducts: productsOrderPrice
    }
  }
// eslint-disable-next-line
    case FILTER_BY_CATEGORIES: {

      console.log(action.payload)
      console.log(state.showProducts)
      console.log(state.allProducts[4].categories.find((c) => c.name === action.payload)?.name)
      const productsCategories = action.payload
      ? state.showProducts = state.allProducts.filter((p) => (p.categories.find((c) => c.name === action.payload)?.name))
      : state.showProducts;

      return {
          ...state,
          showProducts: productsCategories
      }
    }

    case FILTER_BY_PRICE: {
      const filterPrice = state.showProducts.filter((p) => action.payload.min <= p.price && action.payload.max >= p.price)
      return {
        ...state,
        showProducts: filterPrice,
      };
    }

    case NEXT_PAGE: {
      return {
        state,
      };
    }

    case PREV_PAGE: {
      return {
        state,
      };
    }

    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
//
