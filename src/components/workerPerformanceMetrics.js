import React from "react";
import DropdownComponent from "./dropdown";
import InformationBox from "./informationBox";
import PieChart from "./pieChart";
import { LineChart } from "./lineChart";
import ApexChart from "./boxPlot";



export default function WorkerPerformanceMetrics() {
  return (
    <div className="font-display h-full ">
      <div className="flex m-4 font-display text-center justify-center space-x-2">
        <label className="m-2 text-xl font-semibold text-blueGray-600">Select Worker</label>
        <DropdownComponent args={["Worker 1", "Worker 2", "Worker 3"]} />
      </div>
      <div className=" w-full h-full flex">
        <div className=" w-1/4 h-11/12 pt-6 bg-white drop-shadow-2xl  border-white-200 rounded-lg">
          <InformationBox />
        </div>
        <div className="w-3/4 flex flex-col h-11/12 ml-1 mr-1 mb-1 bg-white drop-shadow-2xl border-white-400 rounded-lg ">
          <div className=" w-full h-fit flex flex-row">
            <div className="w-2/5">
                <PieChart/>
            </div>
            <div className="w-3/5 pr-6">
                <ApexChart />
            </div>
          </div>
          <div className=" w-full h-full">
                <LineChart/>
          </div>
        </div>
      </div>
    </div>
  );
}
