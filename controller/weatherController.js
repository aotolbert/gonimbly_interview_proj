const request = require('request');

module.exports = {
    queryMetaWeatherForWOEUsingLatLong: (req, res) => {
            console.log(req.query.lat);
            console.log("Latitude is :", req.query.lat);
            console.log("Longitude is :", req.query.long);
        
        
            request(`https://www.metaweather.com/api/location/search/?lattlong=${req.query.lat},${req.query.long}`, { json: true }, (err, res, body) => {
                if (err) { 
                    return console.log(err); 
                } else {
                    console.log(res);
                    console.log(body.length);

                    let weatherResponseArray = [];

                    for(let i = 0; i < body.length; i++) {
                        let resObj = new WeatherLocationQueryResponse(body[i]);
                        
                        console.log(resObj);
                        weatherResponseArray.pop(resObj);
                    }
                    
                    return weatherResponseArray;
                    
                }
              });
            

          }



    }

    class WeatherLocationQueryResponse {
        constructor(obj) {
            this.distance = obj.distance; 
            this.title = obj.title; 
            this.location_type = obj.location_type; 
            this.woeid = obj.woeid; 
            this.latt_long = obj.latt_long; 
        }
      }
