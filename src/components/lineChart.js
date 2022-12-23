import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["x", "Performance"],
  [2011, 0],
  [2012, 10],
  [2013, 23],
  [2014, 17],
  [2015, 18],
  [2016, 9],
  [2017, 11],
  [2018, 27],
];

export const options = {
  
  hAxis: {
    title: "Time",
    format:'0'
    
  },
  vAxis: {
    title: "Performance",
    // format:'0'
  },
  series: {
    1: { curveType: "function" },
  },
  pointsVisible: true
};

export function LineChart() {
  return (
    <Chart
      
      chartType="LineChart"
      className="w-full font-display"
      loader={<div>Loading Chart</div>}
      data={data}
      options={options}
      width="100%"
      height="400px"
      legendToggle
    />
  );
}