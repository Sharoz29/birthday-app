import { createSelector } from "reselect";

const employeeState = (state) => state.employeeReducer;

const employeeName = (employeeReducer) => employeeReducer.employee.employeeName;

const employeeDOB = (employeeReducer) => employeeReducer.employee.employeeDOB;

export const makeEmployeeName = createSelector(employeeState, employeeName);

export const makeEmployeeDOB = createSelector(employeeState, employeeDOB);
