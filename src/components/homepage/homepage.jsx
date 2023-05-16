import "./homepage.css";
import EmployeeForm from "../employeeform/employeeform";
import EmployeeData from "../employeedata/employeedata";

const HomePage = () => {
  return (
    <div className="birthday-container">
      <h1 className="header-title">Empolyee Details Form:</h1>
      <EmployeeForm />
      <EmployeeData />
    </div>
  );
};
export default HomePage;
