var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
  res.render('profile', { title: "Access your profile!" });
});

/* POST profile page. */
router.post('/profile', function(req, res, next) {
  
  res.render('displayprofile', { title: "Here's your profile!" });
});

module.exports = router;
