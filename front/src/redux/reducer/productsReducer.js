import {
    GET_PRODUCTS,
    GET_PRODUCTS_BY_NAME,
    GET_DETAIL,
    GET_CATEGORIES,
    POST_PRODUCT,
    ORDER_BY_NAME,
    ORDER_BY_PRICE,
    FILTER_BY_CATEGORIES,
    NEXT_PAGE,
    PREV_PAGE,
} from '../actions/productsActions';

const initialState = {
    allProducts : [],
    products : [],
    showProducts: [],
    categories: [],
    detail: [],
};

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS: {
            return {
                ...state,
                products: action.payload,
                showProducts: action.payload,
                allProducts: action.payload
            }
        }
        case GET_PRODUCTS_BY_NAME: {
            return {
                ...state,
                showRecipes: action.payload,
            }
        }
        case GET_DETAIL: {
            return {
                ...state,
                detail: action.payload,
            }
        }
        case GET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload,
            }
        }
        case POST_PRODUCT: {
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
        }

        case ORDER_BY_PRICE: {
            const recipesPrice =
            action.payload === 'min/max'
            ? state.showProducts.sort((a, b) => a.healthScore - b.healthScore)
            : action.payload === 'max/min'
            ? state.showProducts.sort((a, b) => b.healthScore - a.healthScore)
            : state.showProducts;
            return {
                ...state,
                showProducts: recipesHs
            }
        }

        case FILTER_BY_DIETS: {
            const productsCategories = action.payload 
            ? state.showProducts = state.allProducts.filter((r) => r.categories.includes(action.payload))
            : state.showProducts;

            return {
                ...state,
                showProducts: productsCategories
            }
        }

        case NEXT_PAGE: {
            return {
                state
            }
        }

        case PREV_PAGE: {
            return {
                state
            }
        }

        default: {
            return {...state,
            }
        }
    }

}

export default rootReducer;