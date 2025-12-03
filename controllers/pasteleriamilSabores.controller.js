const Producto = require('../model/Productos');
const Registro = require('../model/Registro');

// obtener todos los productos
exports.getAllProducts = async (req, res) => {
    try {   
        const products = await Producto.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los productos', error });
    }   
};

// registrar un nuevo usuario
exports.registerUser = async (req, res) => {
    try {
        const { usuario, email, contrasena } = req.body;
        const newUser = new Registro({ usuario, email, contrasena });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado exitosamente', user: newUser });
    }   catch (error) {             
        res.status(500).json({ message: 'Error al registrar el usuario', error });
    }       
};  

// obtener todos los usuarios registrados
exports.getAllUsers = async (req, res) => {
    try {
        const users = await Registro.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los usuarios', error });
    }   
};      

// eliminar un usuario por ID
exports.deleteUserById = async (req, res) => {
    try {           
        const { id } = req.params;
        const deletedUser = await Registro.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }  
        res.status(200).json({ message: 'Usuario eliminado exitosamente', user: deletedUser });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el usuario', error });
    }

};

// actualizar un producto por ID
exports.updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Producto.findByIdAnd
        Update(id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }       
        res.status(200).json({ message: 'Producto actualizado exitosamente', product: updatedProduct });
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
        res.status(200).json({ message: 'Producto eliminado exitosamente', product: deletedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el producto', error });
    }       
};

// agregar un nuevo producto
exports.addNewProduct = async (req, res) => {
    try {
        const { nombre, precio, descripcion, categoria, stock } = req.body;     
        const newProduct = new Producto({ nombre, precio, descripcion, categoria, stock });
        await newProduct.save();
        res.status(201).json({ message: 'Producto agregado exitosamente', product: newProduct });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al agregar el producto', error });
    }
};

        const updatedProduct = await Producto.findByIdAndUpdate(id,
        Update, req.body, { new: true });   
// actualizar un producto por ID
exports.updateProductById = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedProduct = await Producto.findByIdAndUpdate
        (id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }   
        res.status(200).json({ message: 'Producto actualizado exitosamente', product: updatedProduct });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el producto', error });
    }
};

        