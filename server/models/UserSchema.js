//import mongoose from 'mongoose';
var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({


  name :{ type: String, required: true},
  address: {type: String},
  phoneNumber: {type: String},
  age : {type: mongoose.Number, required: true},
  Gender: {type: String},
  InsuranceName: {type: String},
  dashCam: {type: Boolean},
  email: {type: String, required: true},
  hash: {type: String, required: true},
  quizGrade: {type: Number, required: true, default : 0},
  admin: {type: Boolean, required: true}
});

module.exports = mongoose.model('users', UserSchema);
