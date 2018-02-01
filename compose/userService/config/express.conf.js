//Archivo de configuración para el módulo express
var express = require('express');

module.exports = function (){
  var app = express();

  require ('../app/routes/root.server.routes.js')(app);

  return app;
};
