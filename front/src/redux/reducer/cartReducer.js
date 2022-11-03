import { ADD_ITEM, DELETE_ITEM, DELETE_ALL, POST_CART, GET_CART, TOTAL_PRICE } from "../actionsTypes/actionsTypesCart";

const inicialState = {
  purchesesMaded:[],
  price: 0,
  items: localStorage.cart 
  ? JSON.parse(localStorage.cart)
  : [],
};

const cartReducer = (state = inicialState, action) => {
  const product = action.payload;
  switch (action.type) {
    
    case ADD_ITEM:

      // Ver si el producto existe
      const exist = state.items?.find((x) => x.id === product.id);

      if (exist) {
        // Incrementar cantidad
        const newState = state.items.map((x) => x.id === product.id ? { ...x, qty: (x.qty + 1) } : x);
                
        return {
          ...state,
          items: newState,
        }
      } else {
        const product = action.payload;
        state.items?.push({...product, qty:1})
        return {
          ...state,
          items: state.items,
        };
      }

    case DELETE_ITEM:
      const exist1 = state.items.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        const newItems = state.items.filter((x) => x.id !== exist1.id);
        return {
          ...state,
          items: newItems,
        }
      } else {
        const newItems = state.items.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
        return {
          ...state,
          items: newItems,
        }
      };

      case DELETE_ALL: {
        return {
          items: [],
          price: 0,
        }
      }

      case TOTAL_PRICE: {
         
          return {
            ...state,
            price: action.payload
          
        }
      }


      // case LOCAL_STORAGE_CART: {

      //   const price = action.payload?.forEach((p) => {
      //     let suma = 0;
      //     suma += p.qty * p.price;
      //     return suma;
      //   })

      //   return {
      //     items: action.payload,
      //     price: price
      //   }
      // }

      case POST_CART: {
        return {
          ...state,
        };
      }

      case GET_CART: {
       
        return {
          ...state,
          purchesesMaded: product,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
