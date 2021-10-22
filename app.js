var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var candidate = require('./routes/candidate');
var company = require('./routes/company');
var vacancy = require('./routes/vacancy');
var curriculumvitae = require('./routes/curriculumvitae');
var app = express();


mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/ijms', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('database connection succesful'))
  .catch((err) => console.error(err));

app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header(
	    "Access-Control-Allow-Headers",
	    "Origin, X-Requested-With, Content-Type, Accept"
	  );
	  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
	  next();
	});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/candidates', express.static(path.join(__dirname, 'dist')));
app.use('/company', express.static(path.join(__dirname, 'dist')));
app.use('/vacancy', express.static(path.join(__dirname, 'dist')));
app.use('/curriculum-vitae', express.static(path.join(__dirname, 'dist')));
app.use('/candidate', candidate);
app.use('/company', company);
app.use('/vacancy', vacancy);
app.use('/curriculum-vitae', curriculumvitae);

//Base Route
app.get('/', (req, res) => {
  res.send('invaild endpoint');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/ijms/index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

module.exports = app;