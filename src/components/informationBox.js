import React from "react";
import image from "../static/image.jpg";
import GaugeChart from "react-gauge-chart";

export default function InformationBox() {
  return (
    <div>

      <section class="bg-blueGray-50 h-fit">
        <div class="w-full">
          <div class=" flex  bg-white w-full mb-6  rounded-lg">
            <div>
              <div class="flex flex-col justify-center items-center">
                <div class="w-2/3  justify-center">
                  <div class="flex justify-center items-center">
                    <img
                      alt="..."
                      src={image}
                      class="shadow-xl rounded-full h-11/12 align-middle border-none w-1/2"
                    ></img>
                  </div>
                </div>
                <div class="w-1/3 h-1/3 mt-2 justify-center items-center">
                  <div className="justify-center items-center text-center font-semibold text-blueGray-600">
                    <GaugeChart
                      colors={["#004899"]}
                      percent={0.87}
                      nrOfLevels={1}
                      textColor="#004899"
                      needleBaseColor="#004899"
                      needleColor="#004899"
                      cornerRadius={20}
                      fontSize={17}
                      arcWidth={0.25}
                      arcPadding={0}
                    />
                    Performance
                  </div>
                </div>
              </div>
              <div class="text-center  flex flex-col">
                <span class="text-2xl font-semibold leading-normal mb-1 text-blueGray-700">
                  Peter Parker
                </span>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                  Los Angeles, California
                </div>
                <div class="w-full h-fit text-center items-center justify-center flex">
                  <div class="flex flex-wrap justify-center py-4 lg:pt-4 pt-8 w-11/12">
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block e tracking-wide text-blueGray-600">
                        ML Engineer
                      </span>
                      <span class="text-sm text-blueGray-400">Designation</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block  tracking-wide text-blueGray-600">
                        Technical
                      </span>
                      <span class="text-sm text-blueGray-400">Domain</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block  tracking-wide text-blueGray-600">
                        $5000
                      </span>
                      <span class="text-sm text-blueGray-400">Salary</span>
                    </div>
                    <div class="mr-4 p-3 text-center">
                      <span class="text-xl font-bold block  tracking-wide text-blueGray-600">
                        Remote
                      </span>
                      <span class="text-sm text-blueGray-400">Job Type</span>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

{
  /* <div>
<div className=" rounded border-gray-600 h-full w-full flex flex-col items-center">
  <div className="  mt-20 m-4 w-1/2 h-1/5 ">
    <img src={image}></img>
  </div>
  <ul className=" m-2 p-2  w-11/12 h-4/5">
    <li className="p-1 m-2 h-fit">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Name:</span> Peter
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Designation: </span>ML
        Engineer
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Domain: </span>Technical
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Salary: </span>$5000
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Job: </span>Remote
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Country: </span>Pakistan
      </label>
    </li>
    <li className="p-1 m-2 h-fit ">
      <label className="text-xl  ">
        <span className="font-semibold">&#187; Performance: </span>9.8
      </label>
    </li>
  </ul>
</div>
</div> */
}
