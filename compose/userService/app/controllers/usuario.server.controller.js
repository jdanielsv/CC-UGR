
var mongoDB = require('../../config/mongoose.conf');
var baseDeDatos = mongoDB();
var usuarioModel = require('../models/usuario.server.model');

var request = require('request');

exports.getUsuarios = function (req, res) {
    console.log("---------------------------------------");
    console.log("******Devolver todos los usuarios******");
    usuarioModel.find({}, function (err, users) {
        if(err)
            res.status(500).send({status:'Error al recuperar los usuarios',code:500});
        if(users.length>0) {
            var userMap = [];

            users.forEach(function (user) {
                userMap.push( user);
            });
            res.status(200).send({data: userMap, code:200,status:'Recuperados los usuarios'});
        }else{
            res.status(404).send({status:'No se han encontrado usuarios en la familia',code:404});
        }
    });
};
exports.getUsuario = function (req, res) {
  console.log("----------------------------");
  console.log("******Devolver usuario******");
    console.log("Devolviendo usuario con uid:" + req.params.id);
    usuarioModel.findOne({_id: req.params.id}, function (err, user) {
        if(err)
            res.status(500).send({status:'Error al recuperar el usuario',code:500});
        if (user) {
            res.status(200).send({Usuario: user,status:'Recuperado el usuario correctamente',code:200});
        } else {
            res.status(404).send({status: "No se ha encontrado el usuario con el uid:" + req.params.id,code:404});
        }
    });
};

exports.addUser = function (req, res) {

  console.log("----------------------------");
  console.log("******Actualizar usuario******");
    console.log("Añadimos usuario...");
    console.log(req.body);
        console.log("Creamos el modelo");
        var usuario = new usuarioModel({
                nombre:  req.body.nombre,
                apellidos: req.body.apellidos,
                email: req.body.email,
                direccion : req.body.email
            }
        );
        usuarioModel.findOne({ email: req.body.email }, function (err, user) {
            if (user) {
                res.status(403).send({error: "El email ya está en uso.", code: 403});
            } else {
                console.log("Guardamos en la db...");
                usuario.save(function(err){
                    if(err)
                        console.log(err);
                    else{
                        console.log("Guardado en la db.");
                        res.status(201).send({data:usuario,status:"Añadido el usaurio con éxito",code:201});
                    }
                });
            }
        });

};

exports.delUser = function (req, res) {
  console.log("----------------------------");
  console.log("******Eliminar usuario******");
    console.log("Vamos a eliminar el usuario con el id: " + req.params.id);
    usuarioModel.findOne({ _id: req.params.id }, function (err, user) {
        if(err)
            res.status(500).send({status:'Error al buscar el usuario para eliminarlo',code:500});
        if(user) {
            user.remove();
            res.status(200).send({status: "Usuario eliminado con éxito",code:200});
        }else{
          res.status(404).send({status: "No se encontró el usuario",code:404});
        }
    });

};
exports.updateUser = function (req, res) {
        console.log("-------------------------------");
        console.log("******Actualizar usuario******");
        console.log("El uid a actualizar es:"+ req.params.id);

          usuarioModel.findOneAndUpdate({_id: req.params.id}, {
              nombre: req.body.nombre,
              apellidos: req.body.apellidos,
              email: req.body.email,
              direccion: req.body.direccion,
          }, function (err, user) {
              if (err)
                  cres.status(500).send({status: "Error al buscar y editar el usuario", code: 500});
              if (user) {
                  console.log("USUARIO ACTUALIZADO CON ÉXITO");
                  console.log(user);
                  res.status(204).send({status: "Editado con éxito", code: 204});
              }
              else
                  res.status(404).send({status: "No se ha encontrado el usuario a modificiar con id: "+ req.params.id, code: 404});

          });





}
