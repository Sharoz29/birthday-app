import { employeeActionTypes } from "./employeeTypes";

export const setEmployeeNames = (employeeName) => ({
  type: employeeActionTypes.SET_EMPLOYEE_NAME,
  payload: employeeName,
});

export const setEmployeeDOB = (employeeDOB) => ({
  type: employeeActionTypes.SET_EMPLOYEE_DOB,
  payload: employeeDOB,
});
