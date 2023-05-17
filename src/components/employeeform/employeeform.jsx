import "./employeeform.css";
import { useRef } from "react";

import { useState } from "react";

const EmployeeForm = () => {
  const [employeeInfo, setEmployeeInfo] = useState([]);
  const inputRef = useRef(null);

  const handlingSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  const enteringValue = (e) => {
    if (e.key === "Enter") {
      const employeeNameInfo =
        e.target.parentElement.previousSibling.childNodes[1].value;
      inputRef.current.reset();
      const employeeDOBInfo = e.target.value;
      if (employeeInfo.length !== 0) {
        setEmployeeInfo([
          ...employeeInfo,
          {
            employeeName: employeeNameInfo,
            employeeDOB: employeeDOBInfo,
          },
        ]);
      }
      if (employeeInfo.length === 0) {
        setEmployeeInfo([
          {
            employeeName: employeeNameInfo,
            employeeDOB: employeeDOBInfo,
          },
        ]);
      }
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
    <form onSubmit={handlingSubmit} className="employee-form" ref={inputRef}>
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
