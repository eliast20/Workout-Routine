
const Exercise = require('../models/exercise');
const Workout = require('../models/workout');

module.exports = {
  new: newExercise,
  create,
  addToCast
};

function addToCast(req, res) {
  Workout.findById(req.params.id, function(err, workout) {
    workout.cast.push(req.body.exerciseId);
    workout.save(function(err) {
      res.redirect(`/workouts/${workout._id}`);
    });
  });
}

function create(req, res) {
   req.body.born += 'T00:00';
  Exercise.create(req.body, function (err, performer) {
    res.redirect('/exercise/new');
  });
}

function newExercise(req, res) {
  Exercise.find({})
    //Sort performers by their name
    .sort('name')
    .exec(function (err, exercises) {
      res.render('exercises/new', {
        title: 'Add Exercise',
        exercises
      });
    });
}