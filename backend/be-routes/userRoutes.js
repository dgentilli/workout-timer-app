const express = require('express');
const router = express.Router();
const UserController = require('../be-controllers/userController');

router.post('/', (req, res) => UserController.createUser(req, res));
router.get('/', (req, res) => UserController.getAllUsers(req, res));
router.get('/:id', (req, res) => UserController.getUserById(req, res));

module.exports = router;
