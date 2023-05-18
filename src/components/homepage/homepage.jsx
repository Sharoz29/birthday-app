import "./homepage.css";
import EmployeeForm from "../employeeform/employeeform";
import EmployeeData from "../employeedata/employeedata";
import { useState } from "react";
import PieGraph from "../piechart/piechart";

const HomePage = () => {
  const [employeeInfo, setEmployeeInfo] = useState([]);

  return (
    <div className="birthday-container">
      <h1 className="header-title">Empolyee Details Form:</h1>
      <EmployeeForm
        employeeInfo={employeeInfo}
        setEmployeeInfo={setEmployeeInfo}
      />
      <EmployeeData employeeInfo={employeeInfo} />
      <PieGraph employeeInfo={employeeInfo} />
    </div>
  );
};
export default HomePage;
