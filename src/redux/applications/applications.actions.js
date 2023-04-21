import Axios from "axios";
import {
  FETCH_APPLICATIONS_FAILURE,
  FETCH_APPLICATIONS_REQUEST,
  FETCH_APPLICATIONS_SUCCESS,
  FETCH_APPLICATIONS_LIST_SUCCESS,
} from "./applications.actionTypes";

// fetchData
let fetchData = (dataURL) => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_APPLICATIONS_REQUEST });
      let response = await Axios.get(dataURL);
      dispatch({ type: FETCH_APPLICATIONS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: FETCH_APPLICATIONS_FAILURE, payload: error });
    }
  };
};

let fetchApplicationsData = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: FETCH_APPLICATIONS_REQUEST });
      const dataURL =
        "https://engineering-task.elancoapps.com/api/applications";
      let response = await Axios.get(dataURL);
      dispatch({
        type: FETCH_APPLICATIONS_LIST_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: FETCH_APPLICATIONS_FAILURE, payload: error });
    }
  };
};

export { fetchData, fetchApplicationsData };
