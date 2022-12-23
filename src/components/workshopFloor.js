import { useEffect } from "react";
import React from "react";
import video1 from "../static/video1.mp4";
import video2 from "../static/video2.mp4";
import DropdownComponent from "./dropdown";
import InformationBox from "./informationBox";
import "../static/workshopFloor.css";

export default function WorkShopFloor() {
  // window.location.reload();
  useEffect(() => {
    var text = "Likely Ford F-150";

    async function beginPage() {
      document
        .getElementsByClassName("custom")[0]
        .classList.add("text-3xl", "text-black-600", "font-semibold");

      await new Promise((r) => setTimeout(r, 2000));
      document
        .getElementsByClassName("custom")[0]
        .classList.remove("text-3xl", "text-black-600", "font-semibold");
      document
        .getElementsByClassName("custom")[0]
        .classList.add("text-red-600");
      document.getElementsByClassName(
        "custom-car-text"
      )[0].textContent = `Car Model: ${text}`;
      document
        .getElementsByClassName("custom")[1]
        .classList.add("text-3xl", "text-black-600", "font-semibold");
      await new Promise((r) => setTimeout(r, 2000));
      document
        .getElementsByClassName("custom")[1]
        .classList.remove("text-3xl", "text-black-600", "font-semibold");
      document
        .getElementsByClassName("custom")[2]
        .classList.add("text-3xl", "text-black-600", "font-semibold");
      await new Promise((r) => setTimeout(r, 2000));
      document
        .getElementsByClassName("custom")[2]
        .classList.remove("text-3xl", "text-black-600", "font-semibold");
      document
        .getElementsByClassName("custom")[3]
        .classList.add("text-3xl", "text-black-600", "font-semibold");
      await new Promise((r) => setTimeout(r, 2000));
      document
        .getElementsByClassName("custom")[3]
        .classList.remove("text-3xl", "text-black-600", "font-semibold");
      document
        .getElementsByClassName("custom")[4]
        .classList.add("text-3xl", "text-black-600", "font-semibold");
      await new Promise((r) => setTimeout(r, 2000));
      // begin=true;
      // document.getElementsByClassName('custom')[4].classList.remove("text-3xl","text-black-600","font-semibold")
    }

    beginPage();
  });

  return (
    <div className="flex flex-col h-full font-display ">
      <div className="flex h-full ml-1 mr-1 mb-1 rounded-lg bg-gray-100  border-gray-400 drop-shadow-2xl">
        <div className="flex h-11/12 ml-1 mr-1 mb-1 w-3/4 bg-white   border-white-400 rounded-lg">
          <div className=" w-2/3 p-6 flex-col flex  space-y-20">
            <div className="flex font-display text-center justify-center space-x-2">
              <label className="m-2 text-xl font-semibold">
                Select Workshop
              </label>
              <DropdownComponent
                args={[
                  "Workhop Area 1",
                  "Workhop Area 2",
                  "Workhop Area 3",
                  "Workhop Area 4",
                ]}
              />
            </div>
            <video
              src={video1}
              type="video/mp4"
              loop
              autoPlay
              muted
              controls={false}
              className="border-4 border-black rounded h-fit"
            ></video>
          </div>
          <div className=" w-1/3 p-6">
            <video
              src={video2}
              type="video/mp4"
              loop
              autoPlay
              muted
              controls={false}
              className="border-4 border-black rounded h-fit w-fit"
            ></video>
            <h1 className="custom-car-text text-2xl p-2 pt-12 font-semibold underline">
              Car Model:
            </h1>
            <div className="p-1 pt-10 w-full h-3/5">
              <ul className="list-disc">
                <li className="  border-black p-2 h-fit custom text-xl text-start">
                  Detecting Car Model
                </li>
                <li className="  border-black p-2 h-fit custom text-xl text-start">
                  Calculating template placement
                </li>
                <li className="  border-black p-2 h-fit custom text-xl text-start">
                  Overlaying template placement
                </li>
                <li className="  border-black p-2 h-fit custom text-xl text-start">
                  Fetching placement measurement
                </li>
                <li className="  border-black p-2 h-fit custom text-xl text-start">
                  Overlaying template placement measurement
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-1/4 h-11/12 p-6 ml-1 mr-1 mb-1 bg-white drop-shadow-2xl  border-white-200 rounded-lg">
          <InformationBox />
        </div>
      </div>
    </div>
  );
}
