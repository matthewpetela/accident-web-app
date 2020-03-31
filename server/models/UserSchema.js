//import mongoose from 'mongoose';
var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({


  name :{ type: String, required: true},
  age : {type: mongoose.Number, required: true},
  Gender: {type: String},
  InsuranceName: {type: String},
  email: {type: String, required: true},
  hash: {type: String, required: true}
});

module.exports = mongoose.model('users', UserSchema);
