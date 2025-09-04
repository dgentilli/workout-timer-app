/**
 * @typedef {Object} Workout
 * @property {Array} Exercises
 * @property {string} id - Unique workout identifier
 * @property {string} name - Workout name
 * @property {number} restInterval - rest interval between exercises
 * @property {string} userId - the user with which the workout is associated
 */

/**
 * @typedef {Object} Exercise
 * @property {string} name - name of the exercise
 * @property {number} duration - duration in seconds
 */

class Workout {
  constructor(id = '', name = '', restInterval = 0, exercises = [], userId) {
    this.id = id;
    this.name = name;
    this.restInterval = restInterval;
    this.exercises = exercises;
    this.userId = userId;
  }
}

module.exports = Workout;
