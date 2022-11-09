// import {
//   GET_REVIEWS,
//   POST_REVIEW
// } from "../actionsTypes/actionsTypesReviews";

export const initialState = {
  reviews: [],
  detail: [],
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
    case 'PATCH_REVIEW': {
      return {
        ...state,
      }
    };
    case 'GET_REVIEW_ID': {
      return  {
        ...state,
        detail: action.payload,
      }
    }
    default:
      return state;
  }
};

export default reviewsReducer;