const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  sets: Number,
  weight: Number,
  reps: String,
  muscleGroup: String,
  name: String,
},{
    timestamps: true
  });
module.exports = mongoose.model('Exercise', exerciseSchema);