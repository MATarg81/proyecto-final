import { ADD_ITEM, DELETE_ITEM, DELETE_ALL, POST_CART, GET_CART, TOTAL_PRICE } from "../actionsTypes/actionsTypesCart";

const inicialState = {
  purchesesMaded:[],
  items:localStorage.cart 
  ? JSON.parse(localStorage.cart)
  : [],
  price: 0,
  // items:JSON.parse(localStorage.cart),
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
        const newPrice = state.price + parseInt(product.price);
        
        return {
          ...state,
          items: newState,
          price: newPrice,
        }
      } else {
        const product = action.payload;
        state.items?.push({...product, qty:1})
        const newPrice = state.price + parseInt(product.price);
        return {
          ...state,
          items: state.items,
          price: newPrice,
        };
      }

    case DELETE_ITEM:
      const exist1 = state.items.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        const newItems = state.items.filter((x) => x.id !== exist1.id);
        const newPrice = state.price - parseInt(product.price);
        return {
          ...state,
          items: newItems,
          price: newPrice
        }
      } else {
        const newItems = state.items.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
        const newPrice = state.price - parseInt(product.price);
        return {
          ...state,
          items: newItems,
          price: newPrice
        }
      };



      case DELETE_ALL: {
        return {
          items: [],
          price: 0,
        }
      }

      case TOTAL_PRICE: {
          let sum = 0
          action.payload.map( i => {
            return sum = sum + (parseInt(i.price) * parseInt(i.qty))
          })
          return {
            ...state,
            price: sum
          
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
