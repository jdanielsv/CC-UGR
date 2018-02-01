var express = require('express');
var router = express.Router();
var usuario = require('../controllers/usuario.server.controller');

// middleware that is specific to this router
router.get("/:id",usuario.getUsuario);
router.put("/",usuario.addUser);
router.get("/",usuario.getUsuarios);
router.delete("/:id",usuario.delUser);
router.patch("/:id",usuario.updateUser);
module.exports =router;
