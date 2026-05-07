// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/userController');
// Rotte
router.get('/', userController.home);
router.get('/users', userController.listUsers);
router.post('/users', userController.createUser);
router.post('/users/delete/:id', userController.deleteUser);
router.post('/users/incrementa/:id', userController.incrementa);
router.post('/users/decrementa/:id', userController.decrementa);
module.exports = router;