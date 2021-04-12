import React from "react";

const Weather = (props) => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <div className="shadow-lg p-3 mb-5 rounded p-3 mx-4" {...props}>
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Search:</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
    </div>
  );

  export default Weather;