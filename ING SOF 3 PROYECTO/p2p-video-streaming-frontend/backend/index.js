const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./db');
const magnetRoutes = require('./routes/magnetRoutes');

const app = express();
const port = process.env.PORT || 5000;

// Conectar a la base de datos
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Definir las rutas para el enrutador magnetRoutes
app.use('/api/magnets', magnetRoutes);

// Ruta raíz (opcional)
app.get('/', (req, res) => {
  res.send('API is running...'); // Respuesta simple para la raíz
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
