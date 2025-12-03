const epress = require('express');
const router = epress.Router();
const pasteleriaController = require('../controllers/pasteleriamilSabores.controller');
// Ruta para la pastelería Mil Sabores
module.get('/pasteleriaMilSabores', pasteleriaController,obtenerInfoPasteleriaMilSabores);

// Rutas para productos
router.get('/productos', pasteleriaController.getAllProducts);
router.put('/productos/:id', pasteleriaController.updateProductById);   
    res.status(500).json({ message: 'Error al actualizar el producto', error });

// Rutas para usuarios
router.post('/usuarios/registro', pasteleriaController.registerUser);
router.get('/usuarios', pasteleriaController.getAllUsers);
router.delete('/usuarios/:id', pasteleriaController.deleteUserById);
module.exports = router;    
// Rutas para productos
router.get('/productos', pasteleriaController.getAllProducts);
router.put('/productos/:id', pasteleriaController.updateProductById);

module.exports = router;
