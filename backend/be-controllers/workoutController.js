const WorkoutRepository = require('../be-repositories/WorkoutRepositories.js');

class WorkoutController {
  async createWorkout(req, res) {
    try {
      const workout = await WorkoutRepository.create(req.body);
      res.status(200).json(workout);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAllWorkouts(req, res) {
    try {
      const workouts = await WorkoutRepository.findAll();
      res.status(200).json(workouts);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getWorkoutById(req, res) {
    try {
      const workout = await WorkoutRepository.findById(req.params.id);
      if (!workout) return res.status(404).json({ error: 'Workout not found' });
      res.json(workout);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async deleteWorkoutById(req, res) {
    try {
      const deletedWorkout = await WorkoutRepository.findByIdAndDelete(
        req.params.id
      );
      if (!deletedWorkout)
        return res.status(404).json({ error: 'Workout not found' });
      res.json(deletedWorkout);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async updateWorkoutById(req, res) {
    try {
      const updatedWorkout = await WorkoutRepository.updateById(
        req.params.id,
        req.body
      );
      if (!updatedWorkout)
        return res.status(404).json({ error: 'Update Failed' });
      res.json(updatedWorkout);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = new WorkoutController();
