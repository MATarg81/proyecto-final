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

export function patchReview(body){
  return async function (dispatch){
    console.log(body)
    try{
      const response = await axios.patch(`/reviews/products/${body.product}`, body)
      return dispatch({
        type: "PATCH_REVIEW",
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


export function postReviewActivity(body){
  return async function (dispatch){
    console.log(body)
    try{
      const response = await axios.post('/reviews/activities', body)
      return dispatch({
        type: 'POST_REVIEW_ACTIVITY',
        payload: response,
      });
    } catch (error) {
      console.log(error)
      return error
    }
  }
};

export function getReviewsActivityId(id){
  return async function(dispatch){
    
      try {
        const url = await axios.get('/reviews/activities/' + id);
                
        return dispatch({
          type: 'GET_REVIEW_ACTIVITY_ID',
          payload: url.data
        })
      } catch (err) {
        console.log(err)
        return err
      }          
  }
};

export function patchReviewActivity(body){
  return async function (dispatch){
    try{
      const response = await axios.patch(`/reviews/activities/${body.activity}`, body)
      return dispatch({
        type: "PATCH_REVIEW_ACTIVITY",
        payload: response,
      });
    } catch (error) {
      console.log(error)
      return error
    }
  }
};
