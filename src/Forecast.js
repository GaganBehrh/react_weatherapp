import React from "react";
export default function Forecast() {
  return (
    <div id="forecast">
      <div className="row">
        <div className="col-2">
          <div id="day">Fri</div>
          <img
            src="http://openweathermap.org/img/wn/04d@2x.png"
            width="60px"
            alt
          />
          <div>
            <span id="max-temp">
              17<sup>o</sup>C
            </span>
            <span id="min-temp">
              16<sup>o</sup>C
            </span>
          </div>
        </div>
        <div className="col-2">
          <div id="day">Sat</div>
          <img
            src="https://openweathermap.org/img/wn/01d@2x.png"
            width="60px"
            alt
          />
          <div>
            <span id="max-temp">
              20<sup>o</sup>C
            </span>
            <span id="min-temp">
              18<sup>o</sup>C
            </span>
          </div>
        </div>

        <div className="col-2">
          <div id="day">Sun</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            width="60px"
            alt
          />
          <div>
            <span id="max-temp">
              16<sup>o</sup>C
            </span>
            <span id="min-temp">
              15<sup>o</sup>C
            </span>
          </div>
        </div>
        <div className="col-2">
          <div id="day">Mon</div>
          <img
            src="http://openweathermap.org/img/wn/10d@2x.png"
            width="60px"
            alt
          />
          <div>
            <span id="max-temp">
              15<sup>o</sup>C
            </span>
            <span id="min-temp">
              17<sup>o</sup>C
            </span>
          </div>
        </div>
        <div className="col-2">
          <div id="day">Tue</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            width="60px"
            alt
          />
          <div>
            <span id="max-temp">
              20<sup>o</sup>C
            </span>
            <span id="min-temp">
              18<sup>o</sup>C
            </span>
          </div>
        </div>
        <div className="col-2">
          <div id="day">Wed</div>
          <img
            src="http://openweathermap.org/img/wn/01d@2x.png"
            width="60px"
            alt
          />
          <div>
            <span id="max-temp">
              21<sup>o</sup>C
            </span>
            <span id="min-temp">
              19<sup>o</sup>C
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
