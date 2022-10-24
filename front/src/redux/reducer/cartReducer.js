import { ADD_ITEM, DELETE_ITEM, DELETE_ALL } from "../actionsTypes/actionsTypesCart";

const inicialState = {
  items:[],
  price: 0,
};

const cartReducer = (state = inicialState, action) => {

  const product = action.payload;
  const price = parseFloat(product?.price)
  switch (action.type) {
    case ADD_ITEM:

      // Ver si el producto existe
      const exist = state.items?.find((x) => x.id === product.id);

      if (exist) {
        // Incrementar cantidad
        const newState = state.items.map((x) => x.id === product.id ? { ...x, qty: (x.qty + 1) } : x);
        const newPrice = state.price + price;
        
        return {
          items: newState,
          price: newPrice,
        }
      } else {
        const product = action.payload;
        state.items.push({...product, qty:1})
        const newPrice = state.price + price;
        return {
          items: state.items,
          price: newPrice,
        };
      }
      break;

    case DELETE_ITEM:
      const exist1 = state.items.find((x) => x.id === product.id);

      if (exist1.qty === 1) {
        const newItems = state.items.filter((x) => x.id !== exist1.id);
        const newPrice = state.price - price;
        return {
          items: newItems,
          price: newPrice
        }
      } else {
        const newItems = state.items.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
        const newPrice = state.price - price;
        return {
          items: newItems,
          price: newPrice
        }
      };

      break;

      case DELETE_ALL: {
        return {
          items: [],
          price: 0,
        }
      }

    default:
      return state;
      break;
  }
};

export default cartReducer;
