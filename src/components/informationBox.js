import React from "react";
import image from "../static/image.jpg";
export default function InformationBox() {
  return (
    <div>
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
    </div>
  );
}
