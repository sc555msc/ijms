const mongoose = require('mongoose');

const Student = mongoose.model('Student');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const _ = require('lodash');


module.exports.register = async (req, res, next) => {
    var student = new Student();
        student.fullname = req.body.fullname;
        student.email = req.body.email;
        student.password = req.body.password;
        student.confirm_password = req.body.confirm_password;

        student.save((err, doc) => {
        if (!err) {
            console.log("Saving the document...");
            res.send(doc);
        } else {
          if(err.code == 11000)
            res.status(422).send(['Duplicate email']);
          else
            return next(err);
        }
    });
};

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, student, info) => {
      // error from passport middleware 
      if (err) return res.status(400).json(err);
      // registered user
      else if(student) return res.status(200).json({"token": student.generateJwt()});
      // unkown user or wrong password
      else return res.status(404).json(info);
    })(req, res);
};

module.exports.studentProfile = async (req, res, next) => {
    Student.findOne({ _id: req._id },
        (err, student) => {
            if(!student) 
              return res.status(404).json({ status: false, message:"Student not found." });
            else 
              return res.status(200).json({ status: true, 
                student: _.pick(student, ['fullname', 'email']) });
        }
    );
};


/*
router.post('/', function(req, res, next) {
  Candidate.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


*/ 

// module.exports.register = (req, res, next) => {
//         var student = new Student();
//         student.fullname = req.body.fullname;
//         student.email = req.body.email;
//         student.password = req.body.password;
//         student.save((err, doc) => {
//                 if(!err) 
//                     res.send(doc)
//         });
// }

/*const login = (req, res, next) => {
  var username = req.body.email;
  var password = req.body.password;

  Student.findOne({$or: [{email:username}, {password: password}]})
  .then(student => {
    if(student) {
      bcrypt.compare(password, student.password, function(err, result){
        if(err) {
          res.json({
            error: err
          });
        }
        if(result) {
          let token = jwt.sign({username:student.email}, 'verySecretPassword', 
          {expiresIn: '1h'});
          res.json({
            message: "Login Success",
            token
          });
        } else {
          res.json({
            message: "Password Does not matched"
          });
        }
      });
    } else {
      res.json({
        message:"No user found"
      });
    }
  });

};

*/

