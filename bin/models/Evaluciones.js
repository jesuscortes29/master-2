const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EvaluacionSchema = new Schema({
  nombre: String,
  enunciado: String,
  actividad: [
    {
      type: Schema.Types.ObjectId,
      ref: "Actividad"
    }
  ],

});

var Evaluacion = mongoose.model("Evaluacion", EvaluacionSchema);
module.exports = Evaluacion;