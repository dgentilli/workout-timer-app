/**
 * @typedef {Object} User
 * @property {string} email - User's email address
 * @property {string} id - Unique user identifier
 * @property {Array} workouts - Workout[]
 */

// models/User.js
class User {
  constructor({ id, firstName, lastName, email, hasAdminPrivileges = false }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.hasAdminPrivileges = hasAdminPrivileges;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

module.exports = User;
