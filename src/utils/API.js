import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all trucks
  getWOEIdWithLatLong: function (lat, long) {
    return axios.get(`api/location/search/?lattlong=${lat},${long}`);
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