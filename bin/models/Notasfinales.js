const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotaSchema = new Schema({
  n_final: String,
  nota_final: String,
  usuario: [
    {
      type: Schema.Types.ObjectId,
      ref: "Usuario"
    }
  ],
  evaluacion: [
    {
      type: Schema.Types.ObjectId,
      ref: "Evaluacion"
    }
  ],

});

var Nota = mongoose.model("Nota", NotaSchema);
module.exports = Nota;