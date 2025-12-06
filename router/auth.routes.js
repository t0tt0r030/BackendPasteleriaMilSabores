const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.get('/pasteleriaMilSabores', authController.obtenerInfoPasteleriaMilSabores);

router.get('/usuarios', authController.getAllUsers);
router.post('/registro', authController.registerUser);
router.put('/usuarios/:id', authController.updateUserById);
router.delete('/usuarios/:id', authController.deleteUserById);

module.exports = router;
