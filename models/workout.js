const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      //required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });
  
const workoutSchema = new Schema({
  exercises: [{
    type: Schema.Types.ObjectId,
    ref: 'Exercise'
  }],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    //required: true
  },
  date: Date,
  time: String,
  title: String,
  difficulty: {
    type: String,
    enum: ["beginner", "intermediate", "medium", "expeirenced",]
  }, 
  reviews: [reviewSchema],
  
},{timestamps:true
})

module.exports=mongoose.model('Workout', workoutSchema)
