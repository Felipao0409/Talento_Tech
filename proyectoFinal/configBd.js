// Configuración de dependencias

const mysql = require('mysql2');


// Configuración de la conexión a MySQL
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Por defecto en XAMPP no hay contraseña
    database: 'proyecto_final', // Nombre de tu base de datos
    port: 3306,
});

// Conectar a MySQL
connection.connect(error => {
    if (error) throw error;
    console.log('Conectado exitosamente a la base de datos.');
});


module.exports = connection;
