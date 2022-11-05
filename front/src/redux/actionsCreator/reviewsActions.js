import axios from 'axios';

export function getReviews(){
    return async function(dispatch){
        try {
          const url = await axios.get('/reviews');
          
          return dispatch({
            type: 'GET_REVIEWS',
            payload: url.data
          })
        } catch (err) {
          console.log(err)
          return err
        }          
    }
};

export function postReview(body){
  return async function (dispatch){
    console.log(body)
    try{
      const response = await axios.post('/reviews/products', body)
      return dispatch({
        type: "POST_REVIEW",
        payload: response,
      });
    } catch (error) {
      console.log(error)
      return error
    }
  }
};

export function getReviewsProductId(id){
  return async function(dispatch){
    
      try {
        const url = await axios.get('/reviews/products/' + id);
                
        return dispatch({
          type: 'GET_REVIEW_ID',
          payload: url.data
        })
      } catch (err) {
        console.log(err)
        return err
      }          
  }
};