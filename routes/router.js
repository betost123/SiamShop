var express = require('express');
var nodemailer = require('nodemailer');

var router = express.Router();

// Redirect to application
router.get('/', function (req, res, next) {
	res.redirect('index');
});

//router.get('/index', function (req, res, next) {
//  res.redirect('/index');
//})

router.get('/kontakt', function(req, res, next) {
  res.redirect('/kontakt');
});

router.get('/varor', function(req, res, next) {
  res.redirect('/varor');
})

module.exports = router;
