exports.exercises = [
    {name: 'bench press', reps: '8-12',weight: 145, sets: 4, muscleGroup: 'chest'},
    {name: 'sqauts', reps: '8-12', weight: 145, sets: 4, muscleGroup: 'legs'},
    {name: 'bicep curls', reps: '8-12', weight: 45, sets: 4, muscleGroup: 'bicep'},
    {name: 'Dips', reps: 'unitl Failure', weight: 10, sets: 4, muscleGroup: 'tricep'},
    {name: 'shoulder press', reps: '8-12', weight: 45, sets: 4, muscleGroup: 'shoulder'},
    {name: 'Russian twists', reps: '1 minute',weight: 10, sets: 4, muscleGroup: 'core'},
    {name: 'wide grip pull up', reps: 'until failure', weight: 0, sets: 4, muscleGroup: 'back'},
  ];
  
  exports.workouts = [
    {title: 'Contact', time: '12', difficulty: 'medium', date: new Date()},
    {title: 'Grind', time: '2', difficulty: 'beginner', date: new Date(),
      reviews: [{content: 'The one that started it all!', rating: 5}]
    }
  ];