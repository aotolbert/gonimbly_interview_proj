import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all trucks
  getWOEIdWithLatLong: function (lat, long) {

    const promise1 = new Promise((resolve, reject) => {
        let promise = axios.get(`/api/weather/location/search/latlong/?lat=${lat}&long=${long}`);
        // using .then, create a new promise which extracts the data
        const dataPromise = promise.then((response) => response)
    
        console.log(dataPromise);
        // return it
        resolve(dataPromise);
          
    });

    return promise1;
    
  },

  getWOEIdWithQueryString: function (search) {
    let promise = axios.get(`/api/weather/location/search/query/?search=${search}`);
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response)

    console.log(dataPromise);
    // return it
    return dataPromise
  },

};