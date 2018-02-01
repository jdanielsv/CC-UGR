//Archivo de configuración para el módulo mongoose
var mongoose = require('mongoose');
module.exports = function(){
    //var db = mongoose.connect("mongodb://"+dbHost+"/users",function(err,res){
  var db = mongoose.connect("mongodb://localhost/users",function(err,res){
    if(err) {
       console.log('ERROR: connecting to Database. ' + err);
     }
   });
  return db;
};
