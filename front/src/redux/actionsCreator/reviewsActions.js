import axios from 'axios';
import {
  GET_REVIEWS,
  POST_REVIEW
} from "../actionsTypes/actionsTypesReviews";

export function getReviews(){
    return async function(dispatch){
        try {
          const url = await axios.get('http://localhost:3001/reviews');
          return dispatch({
            type: GET_REVIEWS,
            payload: url.data
          })
        } catch (err) {
          console.log(err)
          return err
        }          
    }
};

export function postReview(payload){
  return async function(dispatch){
    try{
      const response = await axios.post('http://localhost:3001/reviews', payload)
      return dispatch({
        type: POST_REVIEW,
        payload: response,
      });
    } catch (error) {
      console.log(error)
      return error
    }
  }
};