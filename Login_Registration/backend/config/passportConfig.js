const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var Student = mongoose.model('Student');

passport.use(
    new localStrategy({ usernameField: 'email'},
    (username, password, done) => {
        Student.findOne({ email: username },
           (err, students) => {
                if (err) 
                    return done(err);
                // Unregisterd Student
                else if (!students)
                    return done(null, false, {message: 'Invalid Email'})
                // Wrong credientials
                else if (!students.verifyPassword(password))
                    return done(null, false, {message: 'Wrong credientials'})
                // Success
                else
                    return done(null, students);
            }); 
    })
);

