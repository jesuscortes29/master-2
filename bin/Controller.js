const mongoose = require("mongoose");
const Usuarios=require("./models/Usuarios");
const Cursos=require("./models/Cursos");
const Notafinales=require("./models/Notafinales");
const Temas=require("./models/Temas");
const Actividades=require("./models/Actividades");



class Controller{
constructor(){
    this.connect();
   }
  async connect(){
   try{
    await mongoose.connect(
        "mongodb+srv://jesusmanuelcortesb68:<jesuscortes17>@cluster0-0g6u4.mongodb.net/?retryWrites=true&w=majority",
        {useNewUrlParser:true}
    );
    console.log("conectados a la base de datos")
    }catch(e){
    console.error(e)
        }
    }
 getUsuarios(res){
            Usuarios.find({}, (err, usuarios)=>{
                if(err) throw err;
                res.send(Usuarios);

            })
        }

 getCursos(res){
            Cursos.find({}, (err, cursos)=>{
                if(err) throw err;
                res.send(curso);

            })
        }


getActividades(res){
            Actividades.find({}, (err, actividades)=>{
                if(err) throw err;

                res.send(actividades);

            })
        }


    }
exports.controller=new Controller()