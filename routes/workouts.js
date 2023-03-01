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
const workoutsCtrl = require('../controllers/workout');

/* GET users listing. */
router.get('/', workoutsCtrl.index)

module.exports = router;

  