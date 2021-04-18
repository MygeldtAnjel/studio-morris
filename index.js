// importamos los módulos necesarios
const express = require('express');
const path = require('path');

//creamos una instancia de express
const app = express();

// puerto donde queremos que escuche nuestro servidor
const port = 3001;

// función middleware para servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// levantamos nuestro servidor en el puerto seleccionado
app.listen(port, () => {
  console.log(`Servidor iniciado en el puerto: ${port}`);
});