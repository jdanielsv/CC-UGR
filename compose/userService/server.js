
var express = require ('./config/express.conf');
var aplicacion = express();

console.log('*****************************');
console.log('**Inicializando el servidor**');
console.log('*****************************');
console.log('**PUERTO DE ESCUCHA: 3000****');
aplicacion.listen(3000);
module.export=aplicacion;


console.log('**Servidor iniciado**********');
