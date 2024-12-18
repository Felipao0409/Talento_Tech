const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const connection = require("./configBd");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));

/**
 * Establecer EJS como el Motor de plantillas
 */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("inicio");
});
app.get("/about", (req, res) => {
  res.render("pages/about");
});
app.get("/tienda", (req, res) => {
  res.render("pages/tienda");
});
app.get("/contacto", (req, res) => {
  res.render("pages/contact");
});
// Ruta POST para el formulario de contacto
app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  // Validación básica
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Todos los campos son requeridos'
    });
  }

  // Query para insertar en la base de datos
  const query = `
      INSERT INTO contacto (nombre, email, asunto, mensaje, created_at)
      VALUES (?, ?, ?, ?, NOW())
  `;

  connection.query(
    query,
    [name, email, subject, message],
    (error, results) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: 'Error al guardar el mensaje',
          error: error
        });
      }

      res.status(200).json({
        success: true,
        message: 'Mensaje enviado exitosamente',
        data: results
      });
    }
  );
});
// Iniciar el servidor con Express
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});