const request = require('request');

module.exports = {
    queryMetaWeatherForWOEUsingLatLong: (req, res) => {
            console.log(req.query.lat);
            console.log("Latitude is :", req.query.lat);
            console.log("Longitude is :", req.query.long);
            let latVal = req.params.lat;
            let longVal = req.params.long;
        
            // this.setState({latitude: latVal});
            // this.setState({longitude: longVal});
            
        
            // console.log(this.state);
        
            // if(this.state.latitude !== 0.0000 && this.state.longitude !== 0.0000) {
              console.log('located a lat and a long');
              
              // let queryString = 'san%20fra';
              
            //   fetch(`https://www.metaweather.com/api/location/search/?latlong=35.163436,-80.8481284`)
            // //   API.getWOEIdWithLatLong(this.state.latitude, this.state.longitude);
            // //   fetch(`https://www.metaweather.com/api/location/search/?lattlong=${latVal},${longVal}`)
            //   .then(res => res.json())
            //   .then((data) => {
            //     console.log(data);
        
            //     if(data !== null) {
            //     //   console.log(data[0].woeid);
            //     //   this.setState({metaWeatherWOE: data[0].woeid})
            //     }
            //     // this.setState({ contacts: data })
            //   })
            //   .catch(err => {
            //       console.log(err);
            //   })
        
            request('https://www.metaweather.com/api/location/search/?lattlong=35.163436,-80.8481284', { json: true }, (err, res, body) => {
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
                        // let distanceFromTarget = thisLocationObj.distance;
                        // console.log(distanceFromTarget);
                        // let WOEid = thisLocationObj.woeid;
                        // console.log(WOEid);

                        // let parsedObj = JSON.parse(thisLocationObj);
                        // console.log(parsedObj);
                    }

           
                        // let bodyString = body.json();
                        // let datas = JSON.parse(bodyString);
                        // let users = JSON.parse(body);

                        // console.log(typeof users)
                        // console.log('-------------------');
                        // console.log(users[1])
                        // console.log('-------------------');
                        // console.log(users);
                    
                    }
                    // let resArray = JSON.parse(body);
                    // console.log(resArray);
                    // console.log(resArray.length);

                // }
              });
              // A chunk of data has been received.
            //   resp.on('data', (chunk) => {
            //     data += chunk;
            //   });
            
              // The whole response has been received. Print out the result.
            //   resp.on('end', () => {
            //     console.log(JSON.parse(data).explanation);
            //   });
            
            // }).on("error", (err) => {
            //   console.log("Error: " + err.message);
            // });
            // } else {
            //   console.log('Lat and Long info appear to be missing');
            // //   console.log(this.state);
            

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
    // create: (req, res) => {
    //     db.Favorite
    //         .findOrCreate({where: {FoodTruckId: req.params.FoodTruckId, UserFbId: req.params.fbId}})
    //         .then(favorite => res.json(favorite))
    //         .catch(err => res.status(422).json(err));
    // },

    // destroy: (req, res) => {
    //     db.Favorite
    //         .destroy({where: { FoodTruckId: req.params.FoodTruckId, UserFbId: req.params.fbId } })
    //         .then(destroyedFavorite => res.json(destroyedFavorite))
    //         .catch(err => res.status(422).json(err));
    // }
