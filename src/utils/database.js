const mongoose = require("mongoose");
require("dotenv").config(); // Cargar el archivo .env

const connectDB = async () => {
  try {
    // Construimos la URI utilizando variables de entorno para mayor seguridad
    const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@booksandsharecluster.smqk3.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

    // Conectamos a MongoDB
    const db = await mongoose.connect(uri);

    // Extraemos el nombre de la base de datos y el host para mostrarlo en la consola
    const { name, host } = db.connection;
    console.log(`Nombre de la BD: ${name}, Servidor: ${host}`);
  } catch (error) {
    // En caso de error, mostramos el mensaje y detenemos el servidor
    console.error("Error conectando a MongoDB:", error);
    process.exit(1); // Detener el servidor si falla la conexión
  }
};

module.exports = connectDB;
