import "./employeeform.css";
import { useRef } from "react";

const EmployeeForm = ({ employeeInfo, setEmployeeInfo }) => {
  const inputRef = useRef(null);
  const handlingSubmit = (e) => {
    e.preventDefault();
    inputRef.current.reset();
  };

  const cakeDay = (date) => {
    const days = date.slice(5);
    const thisYear = new Date().getFullYear().toString();
    const bdayThisYear = new Date(`${thisYear}-${days}`);
    const bdayDayThisYear = bdayThisYear.getDay();
    //If the birthday is on a Sunday
    if (bdayDayThisYear === 0) {
      const nextDay = new Date(bdayThisYear);
      nextDay.setDate(bdayThisYear.getDate() + 2);

      return new Date(nextDay).toISOString().slice(0, 10);
    }
    //If the birthday is on a Saturday
    if (bdayDayThisYear === 6) {
      const nextDay = new Date(bdayThisYear);
      nextDay.setDate(bdayThisYear.getDate() + 3);

      return new Date(nextDay).toISOString().slice(0, 10);
    } else {
      const nextDay = new Date(bdayThisYear);
      nextDay.setDate(bdayThisYear.getDate() + 1);

      return new Date(nextDay).toISOString().slice(0, 10);
    }
  };

  const enteringValue = (e) => {
    if (e.key === "Enter") {
      //Extracting Employee Data
      const employeeNameInfo =
        e.target.parentElement.previousSibling.childNodes[1].value;

      const employeeDOBInfo = e.target.value;
      const employeeCakeDayInfo = cakeDay(employeeDOBInfo);
      //Clearing input fields
      inputRef.current.reset();

      //Setting the employee State
      if (employeeInfo.length !== 0) {
        setEmployeeInfo([
          ...employeeInfo,
          {
            employeeName: employeeNameInfo,
            employeeDOB: employeeDOBInfo,
            employeeCakeDay: employeeCakeDayInfo,
          },
        ]);
      }
      if (employeeInfo.length === 0) {
        setEmployeeInfo([
          {
            employeeName: employeeNameInfo,
            employeeDOB: employeeDOBInfo,
            employeeCakeDay: employeeCakeDayInfo,
          },
        ]);
      }
    }
  };

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
