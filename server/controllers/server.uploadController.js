
const User = require("../models/UserSchema.js");
exports.crashes = async function(req, res){
    var adminStatus = false;
    if(req.id === -1){
        return res.status(400).send("Bad token")
    }else{
        await User.findById(req.id,function(err,user){
            adminStatus = user.admin;
            console.log(user.admin);
        });
        if(!adminStatus){
            return res.status(400).send("No admin access");
        }
        let file = req.files.file;
        console.log(file);
        file.mv(process.cwd()+`/server/adminData/${req.body.filename}`, function(err) {//make this a database later
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send('200 got file');
        });
    }
};
exports.quizzes = function(req, res){
    var adminStatus;
    if(req.id === -1){
        return res.status(400).send("Bad token")
    }else{
        User.findById(req.id,function(err,user){
            adminStatus = user.admin;
        });
        if(!adminStatus){
            return res.status(400).send("No admin access");
        }
        let file = req.files.file;
        console.log(file);
        file.mv(process.cwd()+`client/src/views/Quiz/${req.body.filename}`, function(err) {//make this a database later
            if (err) {
                return res.status(500).send(err);
            }
            res.status(200).send('200 got file');
        });
    }
};