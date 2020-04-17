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
    for(x in cityArr){
        var compArr = [];
        for(y in cityArr){
            var prod = 1;
            for(i = 0; i< 12; i++){
                prod= prod*Math.abs(cityArr[x]['avgTemp'][i] - cityArr[y]['avgTemp'][i]);
            }
            process.stdout.write(prod.toExponential(2).toString()+' ');
            compArr.push(prod);
        }
        var sorted = compArr.slice().sort(function(a,b){return b-a})
        var ranks = compArr.slice().map(function(v){ return -1*(sorted.indexOf(v)-7)});
        var names =[];
        for(g in ranks){
            if(ranks[g]<4 && ranks[g] !=0){
                names.push(cityArr[g]['city'])
            }
        }
        console.log(names);
    }
};
