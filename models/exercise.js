const mongoose = require('mongoose');

const Schema = mongoose.Schema;

exerciseSchema = new Schema({
  sets: Number,
  weight: Number,
  reps: Number,
  muscleGroup: String,
  name: String,
})