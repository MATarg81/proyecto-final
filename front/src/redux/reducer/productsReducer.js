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
  categories: [],
  detail: [],
  byCategories: [],
  filterByPrice: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        showProducts: action.payload,
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
        ...state
      }
    }
    case EDIT_PRODUCT: {
      return {
        ...state,
      }
    }

    case ORDER_BY_NAME: {
      if (action.payload === "A/Z") {
        return {
          ...state,
          showProducts: state.showProducts.slice().sort(orderName),
          byCategories: state.byCategories.slice().sort(orderName),
          filterByPrice: state.filterByPrice.slice().sort(orderName),
        };
      } else if (action.payload === "Z/A") {
        return {
          ...state,
          showProducts: state.showProducts.slice().sort(orderName).reverse(),
          byCategories: state.byCategories.slice().sort(orderName).reverse(),
          filterByPrice: state.filterByPrice.slice().sort(orderName).reverse(),
        };
      }
    }// eslint-disable-next-line
    case ORDER_BY_PRICE: {
      if (action.payload === "MIN/MAX") {
        return {
          ...state,
          showProducts: state.showProducts.slice().sort(orderPrice),
          byCategories: state.byCategories.slice().sort(orderPrice),
          filterByPrice: state.filterByPrice.slice().sort(orderPrice),
        };
      } else if (action.payload === "MAX/MIN") {
        return {
          ...state,
          showProducts: state.showProducts.slice().sort(orderPrice).reverse(),
          byCategories: state.byCategories.slice().sort(orderPrice).reverse(),
          filterByPrice: state.filterByPrice.slice().sort(orderPrice).reverse(),
        };
      };
    }
// eslint-disable-next-line
    case FILTER_BY_CATEGORIES: {
      const filteredByCategories = [];// eslint-disable-next-line
      state.showProducts.map((p) => {
        const findCat = p.categories.find((c) => c.name === action.payload);
        if (findCat) {
          filteredByCategories.push(p);
        }
      });
      return {
        ...state,
        byCategories: filteredByCategories,
      };
    }

    case FILTER_BY_PRICE: {
      return {
        ...state,
        filterByPrice: action.payload,
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
