const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

var studentScheme = new mongoose.Schema({
        fullname:{
            type: String,
            required: 'Full name can not be empty'
        },
        email: {
            type: String,
            required: 'Email can not be empty',
            unique: true
        },
        password: {
            type: String,
            required: 'Password can not  be empty',
            minlength : [5,'Password must be atleast 5 character long']
        },
        confirm_password: {
            type: String,
            required: 'Password can not  be empty',
            minlength : [5,'Password must be atleast 5 character long']
        },
        saltSecret: String
});


// Regx validation for email
studentScheme.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');


studentScheme.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });        
    });
});

studentScheme.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.confirm_password, salt, (err, hash) => {
            this.confirm_password = hash;
            this.saltSecret = salt;
            next();
        });        
    });
});

// Verify passowrd method
studentScheme.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}

// Generate Jwt
studentScheme.methods.generateJwt = function () {
     return jwt.sign({_id: this._id}, 
        process.env.JWT_SECRET, 
        {
            expiresIn: process.env.JWT_EXP
        }); 

     // Create token
     /*const token = jwt.sign(
        { _id: this._id, email },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
      // save user token
      student.token = token;

      // return new user
    res.status(201).json(student);*/

}

mongoose.model('Student', studentScheme);

