const Registro = require('../model/Registro');

// registrar un nuevo usuario
exports.registerUser = async (req, res) => {
    console.log('BODY:', req.body);
    try {
        const { usuario, email, contrasena, fechaNacimiento } = req.body;
        const newUser = new Registro({ usuario, email, contrasena, fechaNacimiento });
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

exports.updateUserById = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedUser = await Registro.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.status(200).json({
            message: 'Usuario actualizado exitosamente',
            user: updatedUser
        });

    } catch (error) {       
        res.status(500).json({ message: 'Error al actualizar el usuario', error });
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

exports.obtenerInfoPasteleriaMilSabores = (req, res) => {
    res.json({ nombre: "Pastelería Mil Sabores", status: "Operativa" });
};
