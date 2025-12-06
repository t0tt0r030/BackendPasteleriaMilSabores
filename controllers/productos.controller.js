const Producto = require('../model/Productos');

// obtener todos los productos
exports.getAllProducts = async (req, res) => {
    try {   
        const products = await Producto.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error });
    }   
};

// actualizar un producto por ID
exports.updateProductById = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedProduct = await Producto.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({
            message: 'Producto actualizado exitosamente',
            product: updatedProduct
        });

    } catch (error) {       
        res.status(500).json({ message: 'Error al actualizar el producto', error });
    }   
};

// eliminar un producto por ID
exports.deleteProductById = async (req, res) => {
    try {   
        const { id } = req.params;

        const deletedProduct = await Producto.findByIdAndDelete(id);       

        if (!deletedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.status(200).json({
            message: 'Producto eliminado exitosamente',
            product: deletedProduct
        });

    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }       
};

// agregar un nuevo producto
exports.addNewProduct = async (req, res) => {
    try {
        const { nombre, precio, descripcion, categoria, stock } = req.body;     

        const newProduct = new Producto({
            nombre,
            precio,
            descripcion,
            categoria,
            stock
        });

        await newProduct.save();

        res.status(201).json({
            message: 'Producto agregado exitosamente',
            product: newProduct
        });

    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el producto', error });
    }
};

exports.obtenerInfoPasteleriaMilSabores = (req, res) => {
    res.json({ nombre: "Pastelería Mil Sabores", status: "Operativa" });
};

