const express = require('express');
const router = express.Router();
const Workout = require('../models/workout');

module.exports = {
    index
}

function index(req, res){
    res.render('workout/index',{
        title:'All WORKOUTS'
    });
}