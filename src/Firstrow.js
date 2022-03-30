import React from "react";

export default function Firstrow() {
  return (
    <div className="row" id="first-row">
      <div className="col-6">
        <div className="clearfix weather-temperature">
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            alt="sunny"
            id="icon"
            className="float-left"
          />
          <strong id="temperature">15</strong>
          <small className="unit">
            {" "}
            <sup>o</sup>{" "}
            <a href="#" id="celsius">
              C
            </a>
          </small>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>
            <b>Humidity</b> : <span id="humidity" /> 77Km/h
          </li>
          <li>
            <b>Wind </b>: <span id="wind"> 2Km/h</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
