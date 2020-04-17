//import request from 'request';
const axios =require("axios");
const fs = require('fs');
let cityArr= JSON.parse(fs.readFileSync(process.cwd()+'\\server\\adminData\\cityData.JSON'));

//export const report = (req,res)=> {
exports.report = (req,res)=> {
    const found = cityArr.find(element => element['city'] === req.params.cityName);
    if (!req) {
        res.status(400).send({
            message: " Empty!"
        });
    }
    console.log(found['coordinates'][0]);
    axios
        .get('https://api.darksky.net/forecast/0f8e93980168dda45bd651f9c01a18a7/'+found['coordinates'][0]+','+found['coordinates'][1], this.state)
        .then(response => {
            res.send(response.data);
        })
        .catch(error => {
            console.log(error)
            res.status(500).send(error);
        });
};
