import "./employeedata.css";
import { Fragment } from "react";

const EmployeeData = ({ employeeInfo }) => {
  return (
    <Fragment>
      {employeeInfo.length !== 0 && (
        <table className="employee-data-table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Date of Birth</th>
              <th>Date of Cake</th>
              <th>Size of Cake</th>
            </tr>
          </thead>
          <tbody>
            {employeeInfo?.map((info, i) => {
              return (
                <tr key={i}>
                  <td>{info.employeeName}</td>
                  <td>{info.employeeDOB}</td>
                  <td>{info.employeeCakeDay}</td>
                  <td>{info.cakeSize}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </Fragment>
  );
};
export default EmployeeData;
