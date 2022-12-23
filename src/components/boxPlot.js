import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = (props) => {
  const [series, setSeries] = useState([
    {
      type: "boxPlot",
      data: [
        {
          x: "Toyota",
          y: [54, 66, 69, 75, 88],
        },
        {
          x: "Ford",
          y: [43, 65, 69, 76, 81],
        },
        {
          x: "KIA",
          y: [31, 39, 45, 51, 59],
        },
        {
          x: "Honda",
          y: [39, 46, 55, 65, 71],
        },
        {
          x: "Hyundai",
          y: [29, 31, 35, 39, 44],
        },
      ],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      type: "boxPlot",
      height: 350,
    },
    title: {
      text: "",
      align: "left",
    },
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '50%'
          },
      boxPlot: {
        colors: {
          upper: "#004899",
          lower: "#004950",
        },
      },
    },
  });
  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="boxPlot"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
