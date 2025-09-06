// be-repositories/WorkoutRepositories.js
const mongoose = require('mongoose');
const Workout = require('../be-models/Workout');

// Mongoose schema
const workoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    restInterval: { type: Number, required: false },
    exercises: { type: Array, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true }
);

const WorkoutModel = mongoose.model('Workout', workoutSchema);

class WorkoutRepository {
  async create(workoutData) {
    const workoutDoc = await WorkoutModel.create(workoutData);

    await mongoose.model('User').findByIdAndUpdate(workoutData.userId, {
      $push: { workouts: workoutDoc._id },
    });

    return new Workout(
      workoutDoc._id.toString(),
      workoutDoc.name,
      workoutDoc.restInterval,
      workoutDoc.exercises,
      workoutDoc.userId
    );
  }

  async findById(id) {
    const workoutDoc = await WorkoutModel.findById(id);
    if (!workoutDoc) return null;
    return new Workout(
      workoutDoc._id.toString(),
      workoutDoc.name,
      workoutDoc.restInterval,
      workoutDoc.exercises,
      workoutDoc.userId
    );
  }

  async findAll() {
    const workouts = await WorkoutModel.find();
    return workouts.map(
      (doc) =>
        new Workout(
          doc._id.toString(),
          doc.name,
          doc.restInterval,
          doc.exercises,
          workoutDoc.userId
        )
    );
  }

  async update(id, updates) {
    const workoutDoc = await WorkoutModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!workoutDoc) return null;
    return new Workout(
      workoutDoc._id.toString(),
      workoutDoc.name,
      workoutDoc.restInterval,
      workoutDoc.exercises,
      workoutDoc.userId
    );
  }

  async delete(id) {
    return WorkoutModel.findByIdAndDelete(id);
  }
}

module.exports = new WorkoutRepository();
