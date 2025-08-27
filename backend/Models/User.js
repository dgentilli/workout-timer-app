/**
 * @typedef {Object} User
 * @property {string} email - User's email address
 * @property {string} id - Unique user identifier
 * @property {Array} workouts - Workout[]
 */

export default class User {
  constructor(email, workouts) {
    this.email = email;
    this.workouts = workouts;
    /** For starters we'll keep the user class simple
     * because I intend this for personal use only, so
     * I don't want to spend a lot of time building out auth.
     */
  }

  getEmail() {
    return this.email;
  }

  setEmail(newEmail) {
    this.email = newEmail;
  }

  getWorkouts() {
    return this.workouts;
  }

  setWorkouts(updatedWorkouts) {
    this.workouts = updatedWorkouts;
  }
}
