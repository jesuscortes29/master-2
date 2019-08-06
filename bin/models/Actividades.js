const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ActividadSchema = new Schema({
  nombre: String,
  enunciado: String,
  tema: [
    {
      type: Schema.Types.ObjectId,
      ref: "Tema"
    }
  ],

});

var Actividad = mongoose.model("Actividad", ActividadSchema);
module.exports = Actividad;
