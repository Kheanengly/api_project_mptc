// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controller/controller.admin');

// Define routes for handling user-related operations
// Route for list a new admin
router.get('/list', adminController.showAdmin);

// Route for creating a new user
router.post('/register', adminController.createAdmin);

// Route for creating a new user
router.post('/login', adminController.loginAdmin);

// Route for getting a user by ID
router.get('/:adminId', adminController.getAdminById);

// Export the router
module.exports = router;
