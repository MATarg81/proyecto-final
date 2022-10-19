import axios from "axios";
// import GET_CATEGORIES from "../actionsTypes/actionTypesCategories"

export const GET_CATEGORIES= "GET_CATEGORIES"


export function get_categories() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`http://localhost:3001/categories`);
      return dispatch({ 
        type: GET_CATEGORIES, payload: data });
    } catch (error) {
    alert(error)
    }
  };
}


