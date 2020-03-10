//import mongoose from 'mongoose';
var mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({


  name :{ type: String, required: true},
  age : {type: mongoose.Number, required: true},
  Gender: {type: String},
  InsurenceName: {type: String}

});


export default mongoose.model('users', UserSchema);
