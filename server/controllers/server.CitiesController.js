const fs = require('fs');
//import City from '../models/server.CityModel.js';
var City = require("../models/server.CityModel.js");
exports.city = function(req, res) {
    City.findOne(req.params.cityName, (err, doc) => {
        if (err) {
            res.send('we cant find it(ONE)');
        }else {
            res.send(doc);
        }
    });
};

exports.cities = function(req, res) {
    let cityArr= JSON.parse(fs.readFileSync(process.cwd()+'\\server\\adminData\\cityData.JSON'));
    //console.log(cityArr[0]['avgTemp']);
    res.send(cityArr);

};
