const cities = require('../controllers/server.CitiesController.js');
const weather = require('../controllers/server.WeatherController.js');
    express = require('express');
    router = express.Router();

router.get('/rankings/:cityName', cities.city);
router.get('/weather/:cityName', weather.report);

module.exports = router;