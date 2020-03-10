//import request from 'request';
var request = require('request');


//export const report = (req,res)=> {
exports.report = (req,res)=> {
    if (!req) {
        res.status(400).send({
            message: " Empty!"
        });
    }
    request({
        url: 'https://api.darksky.net/forecast/0f8e93980168dda45bd651f9c01a18a7/40.7128,-74.0060', //HARDCODED TO NEW YORK CITY
    }, async (error, response, body) => {
        if (error){
            res.send(error);
        }else {
            let weather = body;
            //format data here
            res.send(weather);
        }
    });
};
