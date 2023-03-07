require('dotenv').config();
require('./config/database');

const Workout = require('./models/workout');
const Exercise = require('./models/exercise');

// For better organization, the seed data is being stored in a separate data.js module
const data = require('./data');

const p1 = Workout.deleteMany({});
const p2 = Exercise.deleteMany({});

Promise.all([p1, p2])
  .then(function(results) {
    // results will be an array
    // of two result objects
    console.log(results);
    return Exercise.create(data.exercises);
  })
  .then(function(exercises) {
    console.log(exercises);
    return Workout.create(data.workouts);
  })
  .then(function(workouts) {
    console.log(workouts);
    return Promise.all([
      Exercise.findOne({}),
      Workout.findOne({})
    ]);
  })
  .then(function(results) {
    const exercise1 = results[0];
    const workout1 = results[1];
    workout1.exercises.push(exercise1._id);
    return workout1.save();
  })
  .then(function(workout1) {
    console.log(workout1);
  })
  .then(process.exit);