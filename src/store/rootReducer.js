import { combineReducers } from "redux";
import employeeReducer from "./employee/employeeReducer";

const rootReducer = combineReducers({
  employeeReducer: employeeReducer,
});

export default rootReducer;
