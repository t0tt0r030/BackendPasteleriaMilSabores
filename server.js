const express = require('express');
const bodyParser = require('body-parser');
//Nuevo por BD
const connectDB = require('./config/database');
const pasteleriaRoutes = require('./router/pasteleriaMilSabores.routes');

//nuevo por BD
require('dotenv').config();

const app = express();
//const Port =3001;
//Modificado por BD
const PORT = process.env.PORT || 3001;

//conectar a la base de datos
connectDB();

app.use(cors({
    origin: 'https://localhost:3000', // Reemplaza con el origen permitido
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

// Rutas de bienbenida
app.get('/', (req, res) => {
    res.json({
        mensaje:'Bienvenido a la API de la Pastelería Mil Sabores',
        endpoints:{
            productos:'GET /api/pasteleriaMilSabores/productos',
            usuarios:'GET /api/pasteleriaMilSabores/usuarios',
        }
    });   
});
// Rutas de la pastelería Mil Sabores
app.use('/api/pasteleriaMilSabores', pasteleriaRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(` Servidor backend corriendo en http://localhost:${PORT}`);
  console.log(` API disponible en http://localhost:${PORT}/api/curriculum`);
});