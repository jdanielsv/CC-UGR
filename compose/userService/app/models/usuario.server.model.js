var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nombre:{
        type: String,
        Required: 'Introduzca el nombre'
    },
    apellidos:{
        type:String,
        Required: 'Introduzca los apellidos'
    },
    email:{
        type:String,
        Required: 'Introduzca el email'
    },
    direccion:{
        type:String
    }
});
module.exports = mongoose.model('Usuario',usuarioSchema);
