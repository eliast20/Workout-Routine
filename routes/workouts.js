// const express = require('express')
// const router = express.Router()
// const workoutsCtrl = require('../controllers/workouts');
// const ensureLoggedIn = require('../config/ensureLoggedIn');


// /* GET users listing. */
// router.get('/', workoutsCtrl.index)
// // GET /movies (display all movies)
// router.get('/new', ensureLoggedIn, workoutsCtrl.new);
// // GET /movies/:id (display a "detail/show" page for a single movie)
// router.get('/:id', workoutsCtrl.show);
// // POST /movies (handle the new form being submitted)
// router.post('/', ensureLoggedIn, workoutsCtrl.create);

// router.delete('/:id', ensureLoggedIn, workoutsCtrl.delete);


// module.exports = router;

const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', workoutsCtrl.index);
router.get('/new', ensureLoggedIn, workoutsCtrl.new);
router.get('/:id', workoutsCtrl.show);
router.post('/', ensureLoggedIn, workoutsCtrl.create);
router.delete('/:id', ensureLoggedIn, workoutsCtrl.remove);

module.exports = router;

  