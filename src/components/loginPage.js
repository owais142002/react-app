import React from "react";
import LoginComponent from "./loginComponent";
import HeaderLogin from "./headerlogin";
import { useState } from "react";

export default function LoginPage() {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <HeaderLogin />
      <div>
        <div className="mx-auto mt-12 font-display">
          <div className="flex flex-col items-center justify-center max-w-screen">
            <div className="p-3 mt-6 bg-white border-b-2 w-full items-center justify-center flex flex-col">
              <ul className="flex space-x-2">
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(1)}
                    className={` ${
                      openTab === 1 ? "bg-originalColor text-white" : ""
                    } inline-block px-4 py-2 text-white-600 bg-white rounded shadow`}
                  >
                    Workshop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    onClick={() => setOpenTab(2)}
                    className={` ${
                      openTab === 2 ? "bg-originalColor text-white" : ""
                    } inline-block px-4 py-2 text-white-600 bg-white rounded shadow`}
                  >
                    OEM
                  </a>
                </li>
              </ul>
              <div className={openTab === 1 ? "block w-full" : "hidden"}>
                <LoginComponent />
              </div>
              <div className={openTab === 2 ? "block w-full" : "hidden"}>
                <LoginComponent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
