import axios from "axios";

export function getActivities() {
  return async function (dispatch) {
    try {
      let axiosActivities = await axios("/activities");

      return dispatch({
        type: "GET_ACTIVITIES",
        payload: axiosActivities.data,
      });
    } catch (e) {
      console.log(e, "error en actions get activities");
    }
  };
}

export function getActivityById(id) {
  return async function (dispatch) {
    try {
      let axiosActivities = await axios(`/activities/${id}`);

      return dispatch({
        type: "GET_ACTIVITY_BY_ID",
        payload: axiosActivities.data,
      });
    } catch (e) {
      console.log(e, "error en actions get activities");
    }
  };
}

export async function patchActivity(body) {
  try {
    await axios.patch(`/activities`, body);
  } catch (err) {
    console.log(err);
    return err;
  }
}

export function postActivity(payload) {
  return async function (dispatch) {
    const axiosPost = await axios.post("/activities", payload);
    return axiosPost;
  };
}

export function deleteActivity(id) {
  return async function (dispatch) {
    try {
      await axios.delete("/activities/" + id);
      return dispatch({
        type: "DELETE_ACTIVITY",
        payload: id,
      });
    } catch (e) {
      console.log(e, "error en delete activity action");
    }
  };
}

export function orderByName(payload) {
  return {
    type: "ORDER_BY_NAME",
    payload,
  };
}

export function orderByPrice(payload) {
  return {
    type: "ORDER_BY_PRICE",
    payload,
  };
}
