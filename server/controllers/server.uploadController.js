const upload = require('express-fileupload');
exports.crashes = function(req, res, next){

    let file = req.files.file;
    console.log(file);
    file.mv(process.cwd()+`/server/adminData/${req.body.filename}`, function(err) {
        if (err) {
            return res.status(500).send(err);
        }

        res.send('400 got file');
    });
};