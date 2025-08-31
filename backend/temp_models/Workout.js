/**
 * @typedef {Object} Workout
 * @property {Array} Exercises
 * @property {string} id - Unique workout identifier
 * @property {string} name - Workout name
 * @property {number} restInterval - rest interval between exercises
 */

/**
 * @typedef {Object} Exercise
 * @property {string} name - name of the exercise
 * @property {number} duration - duration in seconds
 */

export default class Workout {
  constructor(id = '', name = '', restInterval = 0, exercises = []) {
    this.id = id;
    this.name = name;
    this.restInterval = restInterval;
    this.exercises = exercises;
  }
}
