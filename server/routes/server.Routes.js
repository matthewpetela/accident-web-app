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

router.post('/upload/crashes',user.verify,upload.crashes);
router.post('/upload/quizContent',user.verify,upload.quizContent);
router.post('/upload/userQuizResults',user.verify,upload.userQuizResult);

router.get('/users/adminUserData',user.verify,user.adminUserData);
router.get('/users/userAccount',user.verify,user.userAccount);

module.exports = router;
