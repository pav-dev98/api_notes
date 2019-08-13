/*
	cada ves que creas una aplicacion web
	lo primero es crear el servidor luego
	manejar las rutas del de las peticiones
*/
const mongoose = require ('mongoose');

const express = require('express');

const bodyParser = require('body-parser');

const notesRout = require('./routers/notes');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

/*puedo poner todas las rutas de mi app*/

app.use('/notas',notesRout);

mongoose.connect("mongodb://localhost:27017/api_notes",{useNewUrlParser : true},(err,res)=>{
  if(err){
    return console.log("hubo un problema al conectar a la base de datos")
  }
  app.listen(3000,()=>{
    console.log("api_res corriendo en el puerto 3000");
  })
})
