
var bodyParser = require('body-parser');

module.exports = function (app){
    var usuario = require('../controllers/usuario.server.controller');
    var usuarioRoute = require ('./user.server.routes.js');
    var express = require('express');
    var router = express.Router();


    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    //Código para configurar el acceso a la aplicación
    app.use(function (req, res, next) {
        var origin = req.headers.origin;
          console.log("Conexión procedente de: " + origin);
         // Website you wish to allow to connect
         res.setHeader('Access-Control-Allow-Origin', '*');

         // Request methods you wish to allow
         res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

         // Request headers you wish to allow
         res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

         // Set to true if you need the website to include cookies in the requests sent
         // to the API (e.g. in case you use sessions)
         res.setHeader('Access-Control-Allow-Credentials', true);

         // Pass to next layer of middleware
         next();
     });

    router.get("/",function(req,res){
      res.status(200).send({status:'ok'});
    });


    app.use('/api/user',usuarioRoute);
    app.use('/status',router);

}
