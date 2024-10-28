const express = require('express');
const { getAllMagnets, addMagnet } = require('../controllers/magnetsController');
const router = express.Router();

// Ruta para obtener todos los enlaces magnet
router.get('/', getAllMagnets);

// Ruta para agregar un nuevo enlace magnet
router.post('/', addMagnet);

module.exports = router;
