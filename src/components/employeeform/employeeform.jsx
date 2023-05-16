import "./employeeform.css";

import { useState } from "react";

const EmployeeForm = () => {
  const [employeeInfo, setEmployeeInfo] = useState([
    {
      employeeName: "",
      employeeDOB: null,
    },
  ]);

  console.log(employeeInfo);

  const handlingSubmit = (e) => {
    e.preventDefault();
  };

  const enteringValue = (e) => {
    if (e.key === "Enter") {
      const employeeNameInfo =
        e.target.parentElement.previousSibling.childNodes[1].value;

      const employeeDOBInfo = e.target.value;

      setEmployeeInfo([
        {
          employeeName: employeeNameInfo,
          employeeDOB: employeeDOBInfo,
        },
      ]);
    }
  };

  console.log(employeeInfo);
  function handleEnter(event) {
    if (event.key === "Enter") {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  return (
    <form onSubmit={handlingSubmit} className="employee-form">
      <label className="name-input-label label">
        Employee Name
        <input
          type="text"
          className="name-input input"
          placeholder="Employee Name"
          required
          onKeyDown={handleEnter}
        />
      </label>
      <label className="birthday-input-label label">
        Employee Birthday
        <input
          type="date"
          className="birthday-input input"
          onKeyDown={enteringValue}
          required
        />
      </label>
    </form>
  );
};
export default EmployeeForm;
