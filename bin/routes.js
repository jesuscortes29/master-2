const express = require("express");
const app = express();
const {controller}= require("./Controller");
const bodyParser= require("body-parser");

app.use(bodyParser.json());

app.get("/", (req,res )=>{
    res.send("funciona");
})

app.get("/usuario", (req,res )=>{
   controller.getUsuario( res);
})

app.post("/estudiantes",(req, res)=>{
    console.log(req.body);
    res.send("ok");
})

app.get("/temas/:id_temas/actividades/:id_actividades/evalauciones",(req, res)=>{
    console.log(req.params);
    res.send("ok");
})

app.get("/temas/:id_temas/actividades/:id_actividades",(req, res)=>{
    console.log(req.params);
    res.send("ok");
})

app.get("/usuarios/:id_usuarios/cursos/id_curso/temas/:id_temas",(req, res)=>{
    console.log(req.params);
    res.send("ok");
})

app.get("/usuarios/:nota_final",(req, res)=>{
    console.log(req.params);
    res.send("ok");
})

app.get("/cursos/id_curso/temas/:id_temas/actividad",(req, res)=>{
    console.log(req.params);
    res.send("ok");
})

exports.app = app;

