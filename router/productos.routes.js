const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productos.controller');

router.get('/pasteleriaMilSabores', productosController.obtenerInfoPasteleriaMilSabores);

// CRUDDD
router.get('/productos', productosController.getAllProducts);
router.post('/nuevoProducto', productosController.addNewProduct);
router.put('/productos/:id', productosController.updateProductById);
router.delete('/productos/:id', productosController.deleteProductById);

module.exports = router;
