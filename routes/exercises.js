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
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const ensureLoggedIn = require('../config/ensureLoggedIn');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('I am in the exercise router')
})
router.get('/exercises/new', ensureLoggedIn, exercisesCtrl.new);
// POST /performers
router.post('/exercises', ensureLoggedIn, exercisesCtrl.create);
// POST /movies/:id/performers (assoc movie & performer)
router.post('/workouts/:id/exercises', ensureLoggedIn, exercisesCtrl.addToCast);


module.exports = router

