import { Chart } from "react-google-charts";
import { Fragment } from "react";

const PieGraph = ({ employeeInfo }) => {
  const cakeSizeData = employeeInfo?.map((info) => {
    return info.cakeSize;
  });

  const cakeSeperator = (arr, pm) => {
    const cakesArr = arr.filter((el) => {
      if (el === pm) {
        return el;
      }
    });
    if (cakesArr.length === 0) {
      return 0;
    }
    if (cakesArr.length > 0) {
      return cakesArr.length + 1;
    }
  };
  const smallCakeArr = cakeSeperator(cakeSizeData, "Small Cake");
  const largeCakeArr = cakeSeperator(cakeSizeData, "Large Cake");

  const data = [
    ["Cake Size", "Number of Cakes"],
    ["Small Cake", smallCakeArr],
    ["Large Cake", largeCakeArr],
  ];

  const options = {
    title: "Cake Size",
    is3D: true,
  };

  return (
    <Fragment>
      {employeeInfo.length !== 0 && (
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"500px"}
        />
      )}
    </Fragment>
  );
};
export default PieGraph;
