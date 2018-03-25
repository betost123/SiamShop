/*

    This is the router for pathes /todo/ (but not /todo/list)

    **** NOTHING TO DO HERE ****

*/

var express = require('express');
var router = express.Router();

// Hierarcical routing
//router.use("/list", list);

router.get('/', function(req, res, next) {
    res.render('siamshop');
});

router.get('/siamshop/kontakt', function(req, res, next) {
  res.redirect('/kontakt');
});

router.get('/varor', function(req, res, next) {
  res.redirect('/varor');
})


module.exports = router;
