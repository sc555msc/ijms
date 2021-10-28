const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Company = mongoose.model('Company');

passport.use(
    new localStrategy({ usernameField: 'email'},
    (username, password, done) => {
      Company.findOne({ email: username },
           (err, companys) => {
                if (err)
                    return done(err);
                // Unregisterd Company
                else if (!companys)
                    return done(null, false, {message: 'Invalid Email'})
                // Wrong credientials
                else if (!companys.verifyPassword(password))
                    return done(null, false, {message: 'Wrong credientials'})
                // Success
                else
                    return done(null, companys);
            });
    })
);

