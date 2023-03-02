// const express = require('express');
// const router = express.Router();
// const Workout = require('../models/workout');

// module.exports = {
//     index
// }

// function index(req, res){
//     res.render('workout/index',{
//         title:'All WORKOUTS'
//     });
// }

const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

module.exports = {
  index,
  show,
  new: newWorkout,
  create
};

function index(req, res) {
  Workout.find({})
    .then(workouts => {
      res.render('workouts/index', {
        title: 'All Workouts',
        workouts
      });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Error retrieving workouts');
    });
}

async function show(req, res) {
  try {
    const workout = await Workout.findById(req.params.id)
      .populate('exercises')
      .exec();
    const exercises = await Exercise.find({_id: {$nin: workout.exercises}});
    console.log(exercises);
    res.render('workouts/show', {
      title: 'Workout Detail',
      workout,
      exercises
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving workout');
  }
}


function newWorkout(req, res) {
  res.render('workouts/new', { title: 'Add Workout' });
}

function create(req, res) {
  // Convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // Delete empty properties on req.body for defaults to happen 
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const workout = new Workout(req.body);
  workout.save()
    .then(() => {
      console.log(workout);
      res.redirect('/workouts');
    })
    .catch((error) => {
      res.redirect('/workouts/new');
    });
  
}
