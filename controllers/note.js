const note_model = require ('../models/note.js');

console.log(note_model);
function add_note(req,res){
    const note = new note_model({
      title : req.body.title,
      body_note : req.body.body_note,
      link : req.body.link,
    });
    note.save((err,note)=>{
      if(err){
        return res.status(500).json({ message : "hubo un error al guardar el usuario"})
      }
      return res.status(200).json({ message : "se guardo correctamene la nota"});
    });
}

module.exports={
  add_note
}
