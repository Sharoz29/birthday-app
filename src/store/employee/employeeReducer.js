import { employeeActionTypes } from "./employeeTypes";

const INITIAL_STATE = {
  employee: [
    {
      employeeName: "",
      employeeDOB: null,
    },
  ],
};
const employeeReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case employeeActionTypes.SET_EMPLOYEE_NAME:
      return {
        ...state,
        employeeName: payload,
      };
    case employeeActionTypes.SET_EMPLOYEE_DOB:
      return {
        ...state,
        employeeDOB: payload,
      };
    default:
      return state;
  }
};
export default employeeReducer;
