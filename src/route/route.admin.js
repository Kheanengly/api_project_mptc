// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controller/controller.admin');

// Define routes for handling user-related operations

// Route for list a new admin
router.get('/list', adminController.showAdmin);
router.post('/register', adminController.createAdmin);
router.post('/login', adminController.loginAdmin);
router.get('/:adminId', adminController.getAdminById);

// Export the router
module.exports = router;
