const path = require('path'),
    express = require('express'),
    mongoose = require('mongoose'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    Router = require('../routes/server.Routes'),
    passport = require("passport"),
    JwtStrategy = require("passport-jwt").Strategy,
    ExtractJwt = require("passport-jwt").ExtractJwt,
    fileUpload = require('express-fileupload');

module.exports.init = () => {

    /*
        connect to database
        - reference README for db uri
    */
    
    mongoose.connect(process.env.DB_URI || require('./config').mongoURI, {
        useNewUrlParser: true
    });


    /*mongoose.connect(require('./config').mongoURI, {
        useNewUrlParser: true
    });*/

    mongoose.set('useCreateIndex', true);
    mongoose.set('useFindAndModify', false);

    // initialize app
    const app = express();

    // enable request logging for development debugging
    app.use(morgan('dev'));

    // body parsing middleware
    app.use(bodyParser.json());

    // file parsing middleware
    app.use(fileUpload());

    // Passport middleware
    app.use(passport.initialize());
// Passport config
    const opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
    opts.secretOrKey = require('./config').secretOrKey;
    const User = mongoose.model("users");

    passport.use(
        new JwtStrategy(opts, (jwt_payload, done) => {
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
        })
    );

    // add a router
    app.use('/api', Router);

    if (process.env.NODE_ENV === 'production') {
        // Serve any static files
        app.use(express.static(path.join(__dirname, '../../client/build')));

        // Handle React routing, return all requests to React app
        app.get('*', function(req, res) {
            res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
        });
    }

    return app
};
