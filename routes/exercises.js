// var express = require('express');
// var router = express.Router();

// //require controller with functionality 
// const routineCtrl = require('../controllers/routine');

// //all actual paths start with '/routine'
// router.get('/', routineCtrl.index);
// //GET individual routine
// router.get('/:id', routineCtrl.show);

// //POST
// //PUT
// //DELETE

//module.exports = router;

const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('I am in the exercise router')
})

module.exports = router