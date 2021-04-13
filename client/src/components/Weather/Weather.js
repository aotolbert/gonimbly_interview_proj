import React from "react";

const Weather = props => (
    // eslint-disable-next-line jsx-a11y/alt-text
    <div className="shadow-lg p-3 mb-5 rounded p-3 mx-4">
        <div class="input-group mb-3">
            <span class="input-group-text" id="inputGroup-sizing-default">Location:</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" onChange={console.log('Change')}/>
            <button class="btn btn-primary" type="button" id="button-search-weather" onClick={props.onClickSearch()}>Search Weather</button>
            <button class="btn btn-secondary" type="button" id="button-search-woeid" onClick={props.searchForDataUsingWOE()}>Search with WOE</button>

        </div>
    </div>
  );

  export default Weather;