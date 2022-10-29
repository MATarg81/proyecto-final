// import {
//   GET_REVIEWS,
//   POST_REVIEW
// } from "../actionsTypes/actionsTypesReviews";

export const initialState = {
  reviews: [],
}

const reviewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_REVIEWS': {
      return {
        ...state,
        reviews: action.payload,
      }
    };
    case 'POST_REVIEW': {
      return {
        ...state,
      }
    };
    default:
      return state;
  }
};

export default reviewsReducer;