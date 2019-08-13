const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const noteSchema = new Schema({
  title : String,
  body_note : String,
  link : String,
  date : Date
})

module.exports=mongoose.model('Note',noteSchema);
