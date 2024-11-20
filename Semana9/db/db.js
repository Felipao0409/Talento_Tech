const mysql = require('mysql');
const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'proyecto_final'
});

connection.connect((err) => {
    if (err){
        console.log('Error en la conexion de la base de datos: ' , err);
        return;
    }else{
        console.log('Conectado a la base de datos');
    }
    
});

module.exports = connection;

('enviar',(req,res)=> {
    const { nombre, email, asunto,mensaje,create_at } = req.body;
});

if(!nombre || !email || !asunto || !mensaje || !create_at) {
    return res.status(400).json({
        success: false, message:'por favor complete todos los campos'
    });
};

const query = `INSERT INTO contacto (nombre, email, asunto, mensaje, create_at) VALUES (?, ?, ?, ?, ?)`;

connection.query(query, [nombre, email, asunto, mensaje, create_at], (err, results) => {
    if(err) {
        console.log('Error al insertar datos en la base de datos: ', err);
        return res.status(500).json({
            success: false, message: 'Hubo un error al insertar los datos'
        });
    } else {
        console.log('Datos insertados correctamente');
        res.status(201).json({
            success: true, message: 'Los datos se han insertado correctamente'
        });
    }
});