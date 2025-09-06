// Repositories/UserRepository.js
const mongoose = require('mongoose');
const User = require('../be-models/User');

// Mongoose schema
const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    workouts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Workout' }],
  },
  { timestamps: true }
);

const UserModel = mongoose.model('User', userSchema);

class UserRepository {
  async create(userData) {
    const userDoc = await UserModel.create(userData);
    return new User({ id: userDoc._id, ...userDoc.toObject() });
  }

  async findById(id) {
    const userDoc = await UserModel.findById(id).populate('workouts');
    if (!userDoc) return null;
    return new User({
      id: userDoc._id.toString(),
      name: userDoc.name,
      email: userDoc.email,
      workouts: userDoc.workouts,
    });
  }

  async findAll() {
    const users = await UserModel.find();
    return users.map((doc) => new User({ id: doc._id, ...doc.toObject() }));
  }

  async update(id, updates) {
    const userDoc = await UserModel.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!userDoc) return null;
    return new User({ id: userDoc._id, ...userDoc.toObject() });
  }

  async delete(id) {
    return UserModel.findByIdAndDelete(id);
  }
}

module.exports = new UserRepository();
