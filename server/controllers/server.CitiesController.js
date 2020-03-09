
import City from '../models/server.CityModel.js';
exports.city = function(req, res) {
    City.findOne(req.params.cityName, (err, doc) => {
        if (err) {
            res.send('we cant find it');
        }else {
            res.send(doc);
        }
    });
};

exports.cities = function(req, res) {
    let cityArr= {};
    City.find({}, (err, docs) => {
        if (err) {
            res.send('we cant find them');
        }else{
            cityArr = docs;
        }

    }).then(res.send(cityArr));
};