const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TemaSchema = new Schema({
  nombre: String,
  descripcion: String,

  curso: {
    type: Schema.Types.ObjectId,
    ref: "Curso"
  },


});

var Tema = mongoose.model("Tema", TemaSchema);
module.exports = Tema;
