const Validator = require("validator");
const isEmpty = require("is-empty");

exports.loginValidate = function (req,res, next) {
    let errors = {};
    const data = req.body;
// Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
// Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
// Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    req.errors= errors;
    req.isValid = isEmpty(errors);
    next();
};

exports.registerValidate = function(req,res,next) {
    let errors = {};
    const data = req.body;
    console.table(req.body);
// Convert empty fields to an empty string so we can use validator functions
    data.name = !isEmpty(data.name) ? data.name : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : "";
    //Fill empty form data with N/A
    data.address = !isEmpty(data.address) ? data.address : "N/A";
    data.phoneNumber = !isEmpty(data.phoneNumber) ? data.phoneNumber : "N/A";
    data.age = !isEmpty(data.age) ? data.age : 0;
    data.Gender = !isEmpty(data.Gender) ? data.Gender : "N/A";
    data.InsuranceName = !isEmpty(data.InsuranceName) ? data.InsuranceName : "N/A";
    data.dashCam = !isEmpty(data.dashCam) ? data.dashCam : false;
// Name checks
    if (Validator.isEmpty(data.name)) {
        errors.name = "Name field is required";
    }
// Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
// Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is required";
    }
    /*if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }*/
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters and less than 30";
    }
    /*if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }*/
    req.body = data;
    req.errors= errors;
    req.isValid = isEmpty(errors);
    next();
};

exports.updateValidate = function(req,res,next){

};