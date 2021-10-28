const mongoose = require('mongoose');

const Company = mongoose.model('Company');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const _ = require('lodash');


module.exports.register = async (req, res, next) => {
    var company = new Company();
        company.fullname = req.body.fullname;
        company.email = req.body.email;
        company.password = req.body.password;
        company.confirm_password = req.body.confirm_password;

        company.save((err, doc) => {
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
    passport.authenticate('local', (err, company, info) => {
      // error from passport middleware
      if (err) return res.status(400).json(err);
      // registered user
      else if(company) return res.status(200).json({"token": company.generateJwt()});
      // unkown user or wrong password
      else return res.status(404).json(info);
    })(req, res);
};

module.exports.companyProfile = async (req, res, next) => {
  Company.findOne({ _id: req._id },
        (err, company) => {
            if(!company)
              return res.status(404).json({ status: false, message:"Company not found." });
            else
              return res.status(200).json({ status: true,
                company: _.pick(company, ['fullname', 'email']) });
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

