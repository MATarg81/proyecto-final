import { orderName, orderPrice } from "../actionsCreator/productsActions";
import { ORDER_BY_NAME } from "../actionsTypes/actionsTypesProducts";

const initialState = {
  activities: [],
  activityId: []
};

function activitiesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ACTIVITIES":
      return {
        ...state,
        activities: payload,
      };

      case "GET_ACTIVITY_BY_ID":
        return {
          ...state,
          activityId: payload
        }

    case "POST_RECIPE":
      return {
        ...state,
      };

    case "DELETE_ACTIVITY":
      return {
        ...state,
        activities: state.activities.filter((a) => a.id !== payload),
      };
    case "ORDER_BY_NAME": {
      if (payload === "A/Z") {
        return {
          ...state,
          activities: state.activities.slice().sort(orderName),
        };
      } else if (payload === "Z/A") {
        return {
          ...state,
          activities: state.activities.slice().sort(orderName).reverse(),
        };
      }
    } //eslint-disable-next-line
    case "ORDER_BY_PRICE": {
      if (payload === "MIN/MAX") {
        return {
          ...state,
          activities: state.activities.slice().sort(orderPrice),
        };
      } else if (payload === "MAX/MIN") {
        return {
          ...state,
          activities: state.activities.slice().sort(orderPrice).reverse(),
        };
      }
    } //eslint-disable-next-line
    default:
      return state;
  }
}
export default activitiesReducer;
