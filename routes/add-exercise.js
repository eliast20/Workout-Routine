const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('add-exercise');
});

router.post('/', function(req, res, next) {
  // handle the form submission to add the exercise
});

module.exports = router;
