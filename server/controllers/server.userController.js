const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Load input validation

// Load User model
const User = require("../models/UserSchema.js");

exports.login = function(req,res){
    // Form validation
    const errors = req.errors;
    const isValid = req.isValid;
// Check validation
        if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email;
    const hash = req.body.password;
// Find user by email
    User.findOne({ email }).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
// Check password
        bcrypt.compare(hash, user.hash).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                    admin: user.admin
                };
// Sign token
                jwt.sign(
                    payload,
                    process.env.SECRET_OR_KEY || require("../config/config.js").secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            admin: user.admin,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        });
    });
};

exports.register = function(req,res){
    // Form validation
    const errors = req.errors;
    const isValid = req.isValid;
    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }
    User.findOne({ email: req.body.email }).then(user => {
        if (user) {
            return res.status(400).json({ email: "Email already exists" });
        } else {
            const newUser = new User({
                name : req.body.name,
                address: req.body.address,
                phoneNumber: req.body.phoneNumber,
                age : req.body.age,
                Gender: req.body.Gender,
                InsuranceName: req.body.InsuranceName,
                dashCam: req.body.dashCam,
                email: req.body.email,
                hash: req.body.password,
                quizGrade: 0,
                admin: false
            });
            // Hash password before saving in database
            bcrypt.genSalt(12, (err, salt) => {
                bcrypt.hash(newUser.hash, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.hash = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))//return user data
                        .catch(err => console.log(err));
                });
            });
        }
    });
};
exports.verify = function(req,res,next) {
    console.log(req.get('Authorization'));
    jwt.verify(req.get('Authorization').substring(7),process.env.SECRET_OR_KEY || require("../config/config.js").secretOrKey,function(err,decoded){
        if(err){
            res.name = "";
            req.id = -1;
            console.log(req.body.token +'dab');
        }else {
            req.name = decoded.name;
            req.id = decoded.id;
        }
    });
    next();
};
exports.adminUserData = async function(req,res) {
    var adminStatus;
    var usersArray = [];
    if(req.id === -1){
        return res.status(400).send("Bad token")
    }else {
        await User.findById(req.id, function (err, user) {
            adminStatus = user.admin;
        });
        if (!adminStatus) {
            return res.status(400).send("No admin access");
        }
        await User.find({admin: false}, function(err, users){
            console.log(users);
            users.forEach(function(user){
                var userData = {
                    "name" : user.name,
                    "address": user.address,
                    "phoneNumber": user.phoneNumber,
                    "age" : user.age,
                    "Gender" : user.Gender,
                    "InsuranceName" : user.InsuranceName,
                    "dashCam": user.dashCam,
                    "email" : user.email,
                    "quizGrade" : user.quizGrade
                };
                usersArray.push(userData);
            });
        });
        res.status(200).send(usersArray);
    }
};

exports.userAccount = async function(req,res) {
    if(req.id === -1){
        return res.status(400).send("Bad token")
    }else {
        await User.findById(req.id, function (err, user) {
            res.send({
                name: user.name,
                address: user.address,
                phoneNumber: user.phoneNumber,
                age: user.age,
                Gender: user.Gender,
                InsuranceName: user.InsuranceName,
                dashCam: user.dashCam,
                email: user.email,
                quizGrade: user.quizGrade,
                admin: user.admin
            });
        });
    }
};