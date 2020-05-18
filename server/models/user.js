var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  mail: String,
  nombre: String,
  apellido: String,
  password: String,
  saldo: Number
});

var User = mongoose.model("Users", PostSchema);
module.exports = User;