const Workout = require('../models/workout');
const Exercise = require('../models/exercise');

module.exports = {
  index,
  show,
  new: newWorkout,
  create,
  remove,
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
  
  // Delete empty properties on req.body for defaults to happen 
  
  const workout = new Workout(req.body);
  workout.save()
    .then(() => {
      console.log(workout);
      res.redirect('/workouts');
    })
    .catch((error) => {
      console.log(error);
      res.redirect('/workouts/new');
    });
  
}

// function remove(req, res) {
//   console.log('in the remove controller');
//   const id = req.params.id;
//   Workout.findByIdAndDelete(id, (err, workout) => {
//     if (err) {
//       return res.status(400).json({ error: err });
//     }
//     if (!workout) {
//       return res.status(404).json({ error: 'Workout not found' });
//     }
//     return res.status(200).json({ message: 'Workout deleted successfully' });
//   });
// }
async function remove (req, res) {
  console.log(req.params);
  try {
    const { id } = req.params
    const deleted = await Workout.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).redirect('/workouts')
    }
    throw new Error('Collection not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}