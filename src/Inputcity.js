import React from "react";

export default function Inputcity() {
  return (
    <div className="row">
      <div className="col-9">
        <input
          type="search"
          id="cityentered"
          placeholder="Type a city..."
          className="form-control"
        />
      </div>
      <div className="col-3">
        <input type="submit" value="Search" class="btn btn-primary w-100" />
      </div>
    </div>
  );
}
