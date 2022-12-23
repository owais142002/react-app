import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./components/home";
import LoginPage from "./components/loginPage";
import WorkflowOptimizer from "./components/workflowOptimizer";
import DemandForecasting from "./components/demandForecasting";
import WorkerPerformanceMetrics from "./components/workerPerformanceMetrics";
import WorkShopFloor from "./components/workshopFloor";
import reportWebVitals from "./reportWebVitals";
import NavBar from "./components/navbar";

import {
  RouterProvider,
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/home"
        element={
          <div>
            <NavBar />
            <Home />
          </div>
        }
      />
      <Route
        path="/workshopfloor"
        element={
          <div className="h-screen overflow-hidden">
            <NavBar />
            <WorkShopFloor />
          </div>
        }
      />
      <Route
        path="/demandforecasting"
        element={
          <div className="h-screen ">
            <NavBar />
            <DemandForecasting />
          </div>
        }
      />
      <Route
        path="/workflowoptimizer"
        element={
          <>
            <NavBar />
            <WorkflowOptimizer />
          </>
        }
      />
      <Route
        path="/workerperformancemetrics"
        element={
          <div className="h-screen ">
            <NavBar />
            <WorkerPerformanceMetrics />
          </div>
        }
      />
    </>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <RouterProvider router={router}>
      <App />
    </RouterProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
