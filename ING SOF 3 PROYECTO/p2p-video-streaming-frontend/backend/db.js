const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        // Imprimir el URI de conexión para depuración
        
        console.log("MongoDB URI:", process.env.MONGODB_URI);
        
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1); // Salir si no se puede conectar
    }
};

module.exports = connectDB;
