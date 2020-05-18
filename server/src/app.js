const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 8081)

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/users');
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

var User = require("../models/user");

// Add new user
app.post('/users', (req, res) => {
  var db = req.db;
  var mail = req.body.mail;
  var nombre = req.body.nombre;
  var apellido = req.body.apellido;
  var password = req.body.password;
  var saldo = req.body.saldo;
  var new_user = new User({
    mail: mail,
    nombre: nombre,
    apellido: apellido,
    password: password,
    saldo: saldo
  })

  new_user.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Usuario guardado correctamente'
    })
  })
})

// Fetch all users
app.get('/users', (req, res) => {
  User.find({}, 'mail nombre apellido password saldo', function (error, users) {
    if (error) { console.error(error); }
    res.send({
      users: users
    })
  }).sort({_id:-1})
})


