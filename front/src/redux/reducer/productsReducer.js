import {
  GET_PRODUCTS,
  GET_DETAIL,
  GET_CATEGORIES,
  POST_PRODUCT,
  ORDER_BY_NAME,
  ORDER_BY_PRICE,
  //FILTER_BY_CATEGORIES,
  NEXT_PAGE,
  PREV_PAGE,
  GET_PRODUCTS_BY_NAME,
  FILTER_BY_CATEGORIES,
  FILTER_BY_PRICE,
} from "../actionsTypes/actionsTypesProducts";

const initialState = {
  allProducts: [],
  products: [],
  showProducts: [],
  categories: [],
  detail: [],
  byCategories: [],
  filterByPrice: [],
};

const rootReducer = (state = initialState, action) => {
  //se llenan muchos estados con el get products pero siempre se utiliza uno solo.
  //Yo borraría los que no se usan para evitar confusiones.
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        //products: action.payload,
        showProducts: action.payload,
        //allProducts: action.payload,
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

    case ORDER_BY_NAME: {
      const productsName =
        action.payload === "A/Z"
          ? state.showProducts.sort((a, b) => a.name.localeCompare(b.name))
          : action.payload === "Z/A"
          ? state.showProducts.sort((a, b) => b.name.localeCompare(a.name))
          : state.showProducts;

      return {
        ...state,
        showProducts: productsName,
      };
    }

    case ORDER_BY_PRICE: {
      const productsPrice =
        action.payload === "MIN/MAX"
          ? state.showProducts.sort((a, b) => a.price - b.price)
          : action.payload === "MAX/MIN"
          ? state.showProducts.sort((a, b) => b.price - a.price)
          : state.showProducts;
      return {
        ...state,
        showProducts: productsPrice,
      };
    }
    case FILTER_BY_CATEGORIES: {
      const filteredByCategories = []; // eslint-disable-next-line
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
      const finded = [];
      action.payload.map(f => {
        const filtered = state.showProducts.filter(p => p.price === f.price)
        return finded.push(filtered)
      })
        return {
          ...state,
          filterByPrice: finded
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
