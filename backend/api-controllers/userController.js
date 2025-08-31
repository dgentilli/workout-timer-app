// Controllers/UserController.js
const UserRepository = require('../be-repositories/UserRepositories.js');

class UserController {
  async createUser(req, res) {
    try {
      const user = await UserRepository.create(req.body);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getUserById(req, res) {
    try {
      const user = await UserRepository.findById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getAllUsers(req, res) {
    try {
      const users = await UserRepository.findAll();
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new UserController();
