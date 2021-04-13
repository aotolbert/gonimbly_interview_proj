var express = require('express');
var router = express.Router();
const weatherController = require("../../controller/weatherController");

// Matches with "/api/weather/location/search"
router.route("/location/search/latlong")
    .get(weatherController.queryMetaWeatherForWOEUsingLatLong);
  // .get(trucksController.findAll)
  // .post(trucksController.create);

// Matches with "/api/weather/location/search/latlong"
router.route("/location/search/query")
  .get(weatherController.queryMetaWeatherForWOEUsingQueryString);

  // .get(trucksController.findForMap)

router.route("/location/data")
  .get(weatherController.queryWeatherDataUsingWOEId);

// Matches with "/api/weather/:id"
// router.route("/:id");
  // .get(trucksController.findOne)
  // .put(trucksController.update)
  // .delete(trucksController.destroy);

module.exports = router;
