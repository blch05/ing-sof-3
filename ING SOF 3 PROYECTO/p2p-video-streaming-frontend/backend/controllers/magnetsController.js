// magnetsController.js
const Magnet = require('../models/magnetModel');

// Obtener todos los enlaces magnet
const getAllMagnets = async (req, res) => {
  try {
    const magnets = await Magnet.find();
    res.json(magnets);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving magnets' });
  }
};

// Agregar un nuevo enlace magnet
const addMagnet = async (req, res) => {
  const { title, magnetLink } = req.body;

  try {
    const newMagnet = new Magnet({ title, magnetLink });
    await newMagnet.save();
    res.status(201).json(newMagnet);
  } catch (error) {
    res.status(500).json({ message: 'Error adding magnet' });
  }
};

module.exports = { getAllMagnets, addMagnet };
