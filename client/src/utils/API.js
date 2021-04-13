import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all trucks
  getWOEIdWithLatLong: function (lat, long) {
    let promise = axios.get(`/api/weather/location/search/latlong/?lat=${lat}&long=${long}`);
    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)
    // return it
    return dataPromise
  },
  // Gets the Truck with the given id
  getTruck: function (id) {
    return axios.get("/api/trucks/" + id);
  },
  getTrucksForMap: function (lLat, hLat, lLong, hLong) {
    console.log(lLat, hLat, lLong, hLong)
    return axios.get(`/api/trucks/map?lowLat=${lLat}&highLat=${hLat}&lowLong=${lLong}&highLong=${hLong}`);
  }

};