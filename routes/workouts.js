// const express = require('express');
// const router = express.Router();


// router.get('/', (req, res) => {
//     res.send('Here are some leg exercises you can do:');
//   });
  
//   router.get('/squat', (req, res) => {
//     res.send('Squats are a great exercise for your legs.');
//   });
  
//   router.get('/lunges', (req, res) => {
//     res.send('Lunges are another great exercise for your legs.');
//   });
  
//   router.get('/deadlifts', (req, res) => {
//     res.send('Deadlifts can help build strength in your legs.');
//   });

//   module.exports = router;


const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');


/* GET users listing. */
router.get('/', workoutsCtrl.index)
// GET /movies (display all movies)
router.get('/new', ensureLoggedIn, workoutsCtrl.new);
// GET /movies/:id (display a "detail/show" page for a single movie)
router.get('/:id', workoutsCtrl.show);
// POST /movies (handle the new form being submitted)
router.post('/', ensureLoggedIn, workoutsCtrl.create);

module.exports = router;


  