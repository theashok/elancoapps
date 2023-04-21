import { combineReducers } from "redux";
import {
  APPLICATIONS_FEATURE_KEY,
  applicationsReducer,
} from "./applications/applications.reducer";
import { ALERT_FEATURE_KEY, alertReducer } from "./alert/alert.reducer";

let rootReducer = combineReducers({
  [APPLICATIONS_FEATURE_KEY]: applicationsReducer,
  [ALERT_FEATURE_KEY]: alertReducer,
});

export { rootReducer };
