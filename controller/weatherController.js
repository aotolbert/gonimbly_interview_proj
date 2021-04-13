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
                    let weatherResponseArray = [];

                    for(let i = 0; i < body.length; i++) {
                        let resObj = new WeatherLocationQueryResponse(body[i]);
                        
                        console.log(resObj);
                        weatherResponseArray.pop(resObj);
                    }
                    
                    return weatherResponseArray;
                    
                }
              });
            

          },

          queryMetaWeatherForWOEUsingQueryString: (req, res) => {
            console.log("Searching for :", req.query.search);
        
        
            request(`https://www.metaweather.com/api/location/search/?query=${req.query.search}`, { json: true }, (err, res, body) => {
                if (err) { 
                    return console.log(err); 
                } else {

                    let weatherResponseArray = [];

                    for(let i = 0; i < body.length; i++) {
                        let resObj = new WeatherLocationQueryResponse(body[i]);
                        
                        console.log(resObj);
                        weatherResponseArray.pop(resObj);
                    }
                    
                    return weatherResponseArray;
                    
                }
              });
            

          },

          queryWeatherDataUsingWOEId: (req, res) => {
            console.log("Searching for :", req.query.woeid);
        
        
            request(`https://www.metaweather.com/api/location/${req.query.woeid}`, { json: true }, (err, res, body) => {
                if (err) { 
                    return console.log(err); 
                } else {

                    let weatherResponseArray = [];

                    for(let i = 0; i < body.length; i++) {
                        let resObj = new WeatherLocationDataResponse(body[i]);
                        
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

      class WeatherLocationDataResponse {
        constructor(obj) {
            this.weather_state_name = obj.weather_state_name; 
            this.weather_state_abbr = obj.weather_state_abbr; 
            this.wind_direction_compass = obj.wind_direction_compass; 
            this.applicable_date = obj.applicable_date; 
            this.min_temp = obj.min_temp; 
            this.max_temp = obj.max_temp; 
            this.the_temp = obj.the_temp; 
            this.wind_speed = obj.wind_speed; 
            this.wind_direction = obj.wind_direction; 
            this.air_pressure = obj.air_pressure; 
            this.humidity = obj.humidity; 
            this.visibility = obj.visibility; 
            this.predictability = obj.predictability; 

        }
      }