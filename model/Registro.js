const mongoose = require('mongoose');
const registroSchema = new mongoose.Schema({
    usuario: {
        type: String,       
        required: [true, 'El nombre de usuario es obligatorio']                 
    },
    email: {
        type: String,   
        required: [true , 'El email es obligatorio']   
    },  
    contrasena: {       
        type: String,   
        required: [true , 'La contraseña es obligatoria']   
    },
    fechaNacimiento: {
        type: Date,   
        required: [true , 'La fecha de nacimiento es obligatoria']   
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });
module.exports = mongoose.model('Registro', registroSchema);    
    