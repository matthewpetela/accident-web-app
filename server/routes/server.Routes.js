const cities = require('../controllers/server.CitiesController.js');
const weather = require('../controllers/server.WeatherController.js');
const validator = require("../controllers/server.validateController.js");
const user = require("../controllers/server.userController.js");
const upload = require("../controllers/server.uploadController.js");
    express = require('express');
    router = express.Router();

router.get('/rankings/:cityName', cities.city);
router.get('/weather/:cityName', weather.report);
router.post('/users/register',validator.registerValidate,user.register);
router.post('/users/login',validator.loginValidate,user.login);
router.post('/upload/crashes',upload.crashes);

module.exports = router;
