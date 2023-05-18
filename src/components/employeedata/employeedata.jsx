import "./employeedata.css";
import { Fragment, useState } from "react";

const EmployeeData = ({ employeeInfo }) => {
  // const [unique, setUnique] = useState([]);
  // const [cakeSize, setCakeSize] = useState([]);

  // const uniqueValue = (array, propertyName) => {
  //   return array.filter(
  //     (e, i) =>
  //       array.findIndex((a) => a[propertyName] === e[propertyName]) === i
  //   );
  // };
  // const uniqueBdays = uniqueValue(employeeInfo, "employeeCakeDay");

  return (
    <Fragment>
      {employeeInfo && (
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

//checker(uniqueBdays,
