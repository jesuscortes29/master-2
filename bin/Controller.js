const mongoose = require("mongoose");
const Usuario=require("./models/Usuario")
class Controller{
constructor(){
    this.connect();
}
async connect(){
try{
    await mongoose.connect(
         "mongodb+srv://jesusmanuelcortesb68:<jesuscorteS17*>@cluster0-5fqma.mongodb.net/MASTER-2?retryWrites=true&w=majority",
        {useNewUrlParser:true}
    );
    console.log("conectados a la base de datos")
    }catch(e){
    console.error(e)
        }
    }
        getUsuario(res){
            Usuario.find({}, (err, Usuario)=>{
                if(err) throw err;
                res.send(Usuario);

            })
        }
    }
exports.controller=new Controller()