const mongoose = require('mongoose');
const Workout = require('../be-models/Workout');

// Mongoose schema
const workoutSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    restInterval: { type: Number, required: false },
    exercises: { type: Array, required: true },
  },
  { timestamps: true }
);

const WorkoutModel = mongoose.model('Workout', workoutSchema);

class WorkoutRepository {
  async create(workoutData) {
    const workoutDoc = await WorkoutModel.create(workoutData);
    return new Workout({ id: workoutDoc._id, ...workoutDoc.toObject() });
  }

  async findById(id) {
    const workoutDoc = await WorkoutModel.findById(id);
    if (!workoutDoc) return null;
    return new Workout({ id: workoutDoc._id, ...workoutDoc.toObject() });
  }

  async findAll() {
    const workouts = await WorkoutModel.find();
    return workouts.map(
      (doc) => new Workout({ id: doc._id, ...doc.toObject() })
    );
  }

  async update(id, updates) {
    const workoutDoc = await WorkoutModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!workoutDoc) return null;
    return new Workout({ id: workoutDoc._id, ...workoutDoc.toObject() });
  }

  async delete(id) {
    const workoutDoc = await WorkoutModel.findByIdAndDelete(id);
    if (!workoutDoc) return null;
    return new Workout({ id: workoutDoc._id, ...workoutDoc.toObject() });
  }
}

module.exports = new WorkoutRepository();
