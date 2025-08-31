const express = require('express');
const router = express.Router();
const WorkoutController = require('../be-controllers/workoutController');

router.post('/', (req, res) => WorkoutController.createWorkout(req, res));
router.get('/', (req, res) => WorkoutController.getAllWorkouts(req, res));
router.get('/:id', (req, res) => WorkoutController.getWorkoutById(req, res));
router.delete('/:id', (req, res) =>
  WorkoutController.deleteWorkoutById(req, res)
);
router.patch('/:id', (req, res) =>
  WorkoutController.updateWorkoutById(req, res)
);

module.exports = router;
