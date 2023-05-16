import "./employeedata.css";

const EmployeeData = () => {
  return (
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
        <tr>
          <td>Ali</td>
          <td>1999-02-22</td>
          <td>2011-02-25</td>
          <td>Small</td>
        </tr>
      </tbody>
    </table>
  );
};
export default EmployeeData;
