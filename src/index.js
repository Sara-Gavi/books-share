const express = require("express");
const connectDB = require("./utils/database"); // Importa la función de conexión a MongoDB

const server = express();

// Conectar a MongoDB
connectDB();

// Mensaje de prueba para verificar que el servidor funciona
console.log("Hola que tal");

// Iniciar el servidor en el puerto 5001
const PORT = 5001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
