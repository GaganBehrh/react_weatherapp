import React from "react";
import ReactDOM from "react-dom";
import Forecast from "./Forecast";
import Firstrow from "./Firstrow";
import Inputcity from "./Inputcity";
import Overview from "./Overview";
import Logo from "./Logo";
import "./App.css";
import "./Firstrow.css";
import "./Forecast.css";

function App() {
  return (
    <div className="weather-app">
      <div className="weather-app-wrapper">
        <Inputcity />
        <Overview />
        <Firstrow />
        <Forecast />
        <Logo />
      </div>
    </div>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
