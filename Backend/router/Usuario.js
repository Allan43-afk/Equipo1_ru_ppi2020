const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");

router.get('/usuario', (req, res) => {
    mysqlConnection.query('SELECT * FROM Usuario', (err, rows, fields) => {
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

//agregar usuario nuevo

router.post('/nuevo-usuario',(req,res)=>{
    const{Identificacion, Nombre, Apellido, Contraseña, Estado, Correo}=req.body;

    let usuario = [Identificacion, Nombre, Apellido, Contraseña, Estado, Correo];

    let nuevoUsuario = `INSERT INTO Usuario (Identificacion, Nombre, Apellido, Contraseña, Estado, Correo)VALUES(?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoUsuario,usuario,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`Usuario registrado exitosamente`});
        }
    });
});
//actualizar

router.patch('/actualizar/:Identificacion', (req, res) => {
    const {Nombre, Apellido, Contraseña, Estado, Correo} = req.body;

    const { Identificacion } = req.params;

    mysqlConnection.query(`UPDATE Usuario SET Nombre = ?, Apellido = ?, Contraseña = ?, Estado = ?, Correo = ? WHERE Identificacion = ?`,

        [Nombre, Apellido, Contraseña, Estado, Correo, Identificacion], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `Usuario Actualizado` });
            } else {
                console.log(err);
            }
        });
});

//bucar Usuario
router.get('/buscar/:Identificacion',(req,res)=>{
    const {Identificacion} = req.params;
    mysqlConnection.query('SELECT * FROM Usuario WHERE Identificacion =?', [Identificacion],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
})

//eliminar Usuario
router.delete('/eliminar/:Identificacion', (req,res) => {
    const {Identificacion} = req.params;
    mysqlConnection.query('DELETE FROM Usuario WHERE Identificacion=?', [Identificacion], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'usuario eliminado'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;