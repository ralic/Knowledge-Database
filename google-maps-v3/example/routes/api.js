var express = require('express');
var router = express.Router();
var app = require('../app');

router.get('/', function(req, res, next) {
    next();
});

router.get('/get', function (req, res) {
    res.json({
        fakeData: 'fakeData'
    })
});

/*
router.param('id', function(req, res, next, id) {
    // sample user, would actually fetch from DB, etc...
    req.user = {
        id: id,
        name: 'TJ'
    };
    next();
});

router.route('/users/:id')
  .get(function (req, res, nextt) {
      res.json(req.user);
      next();
  });
*/
module.exports = router;
