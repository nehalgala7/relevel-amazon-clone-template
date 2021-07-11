const express = require("express");
const router = express.Router();
const UserController = require('../controllers/user.controller');

// Create routes for user here
//example
router.post('signup', UserController.signup);
module.exports = router;
