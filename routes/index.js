var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {page:'Home', menuId:'home'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {page:'SAML Auth', menuId:'about'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {page:'OAuth', menuId:'contact'});
});

module.exports = router;
