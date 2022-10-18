import axios from "axios";
import { GET_CATEGORIES } from "../actionsTypes/actionsTypes.Categoriesjs"




export function get_categories() {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/categories/getAll`
      );
      return dispatch({ type: GET_CATEGORIES, payload: data });
    } catch (error) {
    alert(error)
    }
  };
}


