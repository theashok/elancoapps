import {
  FETCH_APPLICATIONS_FAILURE,
  FETCH_APPLICATIONS_REQUEST,
  FETCH_APPLICATIONS_SUCCESS,
  FETCH_APPLICATIONS_LIST_SUCCESS,
} from "./applications.actionTypes";

export const APPLICATIONS_FEATURE_KEY = "applications";

let initialState = {
  loading: false,
  applications: [],
  applicationList: [],
  errorMessage: "",
};

let applicationsReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case FETCH_APPLICATIONS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_APPLICATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        applications: payload,
      };
    case FETCH_APPLICATIONS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        applicationList: payload,
      };
    case FETCH_APPLICATIONS_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };
    default:
      return state;
  }
};
export { applicationsReducer };
