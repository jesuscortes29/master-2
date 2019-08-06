const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CursoSchema = new Schema({
  nombre: String,
  descripcion: String,

  usuario: [
    {
      type: Schema.Types.ObjectId,
      ref: "Usuario"
    }
  ]
});

var Curso = mongoose.model("Curso", CursoSchema);
module.exports = Curso;
