const express = require('express')
const router = express.Router()
const usersCtrl = require('../controllers/users');
const ensureLoggedIn = require('../config/ensureLoggedIn');


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource')
})
// POST /movies/:id/reviews
router.post('/workouts/:id/users', ensureLoggedIn, usersCtrl.create);
// DELETE /reviews/:id
router.delete('/users/:id', ensureLoggedIn, usersCtrl.delete);

module.exports = router;
