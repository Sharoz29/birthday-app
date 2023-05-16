import "./employeeform.css";

const EmployeeForm = () => {
  const handlingSubmit = (e) => {
    e.preventDefault();
  };
  const enteringValue = (e) => {
    if (e.key === "Enter") {
      console.log(e.target.value);
    }
  };

  return (
    <form onSubmit={handlingSubmit} className="employee-form">
      <label className="name-input-label label">
        Employee Name
        <input
          type="text"
          className="name-input input"
          placeholder="Employee Name"
          onKeyDown={enteringValue}
        />
      </label>
      <label className="birthday-input-label label">
        Employee Birthday
        <input
          type="date"
          className="birthday-input input"
          onKeyDown={enteringValue}
        />
      </label>
      <button type="submit" className="submit-btn">
        &#43;
      </button>
    </form>
  );
};
export default EmployeeForm;
