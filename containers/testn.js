var express = require('express');
var app = express();
app.use('/',function(req,res){
  res.status(200).send({"status":"ok"});
});

console.log('*****************************');
console.log('**Inicializando el servidor**');
console.log('*****************************');
app.listen(80);
module.export=express;
