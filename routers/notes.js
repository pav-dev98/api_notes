const express = require('express');
const notesRout = express.Router();
const noteController = require ('../controllers/note.js')

notesRout.get('/',(req,res)=>{
	res.status(200).json({ message : " estas en la raiz del api rest"})
})

notesRout.post('/add_note',noteController.add_note);


module.exports=notesRout;
