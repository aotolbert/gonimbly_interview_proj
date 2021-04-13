
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  // Gets all trucks
  getWOEIdWithLatLong: function (lat, long) {

    const promise1 = new Promise((resolve, reject) => {
        fetch(`/api/weather/location/search/latlong/?lat=${lat}&long=${long}`)
        // using .then, create a new promise which extracts the data
        .then((response) => {
          resolve(response);
        }).catch(err => {
          console.log(err);
        })
        // return it
          
    });

    return promise1;

  },

  getWOEIdWithQueryString: function (search) {
    const promise1 = new Promise((resolve, reject) => {

    fetch(`/api/weather/location/search/query/?search=${search}`)
      // using .then, create a new promise which extracts the data
      .then((response) => {
        resolve(response);
      }).catch(err => {
        console.log(err);
      })

    });

    return promise1;
  },

  getWeatherDataWithWOEId: function (woeid) {
    const promise1 = new Promise((resolve, reject) => {

    fetch(`/api/weather/location/data/?woeid=${woeid}`)
      // using .then, create a new promise which extracts the data
      .then((response) => {
        resolve(response);
      }).catch(err => {
        console.log(err);
      })

    });

    return promise1;
  }

};