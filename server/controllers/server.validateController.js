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
    if (Validator.isEmpty(data.password2)) {
        errors.password2 = "Confirm password field is required";
    }
    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = "Password must be at least 6 characters";
    }
    if (!Validator.equals(data.password, data.password2)) {
        errors.password2 = "Passwords must match";
    }
    req.errors= errors;
    req.isValid = isEmpty(errors);
    next();
};