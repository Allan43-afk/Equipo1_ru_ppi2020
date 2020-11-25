const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");

router.get('/registrosituacion', (req, res) => {
    mysqlConnection.query('SELECT * FROM RegistroSituacion', (err, rows, fields) => {
        //Si no hay error
        if (!err) {
            //Verdadero
            res.json(rows);
            //Si no es verdadero
        } else {
            console.log(err);
        }
    })//Fin query
})//Fin del get

//agregar registro nuevo

router.post('/nueva-situacion',(req,res)=>{
    const{Consecutivo, decripcion, fechareporte_sistema, id_usuario, estado, fecha_revision, identificacion_docente_revision, observaciones, Tipo}=req.body;

    let registrosituacion = [Consecutivo, decripcion, fechareporte_sistema, id_usuario, estado, fecha_revision, identificacion_docente_revision, observaciones, Tipo];

    let nuevoRegistro = `INSERT INTO RegistroSituacion (Consecutivo, decripcion, fechareporte_sistema, id_usuario, estado, fecha_revision, identificacion_docente_revision, observaciones, Tipo)VALUES(?,?,?,?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoRegistro,registrosituacion,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`Situacion registrada exitosamente`});
        }
    });
});
//actualizar

router.patch('/actualizar/:Consecutivo', (req, res) => {
    const {decripcion, fechareporte_sistema, id_usuario, estado, fecha_revision, identificacion_docente_revision, observaciones, Tipo} = req.body;

