const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del producto es obligatorio']                 
    },
    precio: {
        type: Number,   
        required: [true , 'El precio del producto es obligatorio']   

    },
    descripcion: {
        type: String,
        required: false
    },
    categoria: {    
        type: String,
        required: true
    },  
    stock: {
        type: Number,
        required: [true , 'El stock del producto es obligatorio']   
    }
}, { timestamps: true });
module.exports = mongoose.model('Producto', ProductoSchema);
