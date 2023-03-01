// controllers/todos.js
const Routine = require('../models/exercise');

module.exports = {
    index,
    show
  }
 

// controllers/todos.js

function index(req, res) {
    res.render('routine/index', {
      routine : Routine.getAll()
    });
  }

  function show(req, res) {
    res.render('routine/show', {
        routine: Routine.getOne(req.params.id)
    })
  }
 
 