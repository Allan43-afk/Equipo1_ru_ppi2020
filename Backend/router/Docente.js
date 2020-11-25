const express = require("express");
const router = express.Router();
const mysqlConnection = require("../db/db");

router.get('/docente', (req, res) => {
    mysqlConnection.query('SELECT * FROM Docente', (err, rows, fields) => {
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

//agregar docente nuevo

router.post('/nuevo-docente',(req,res)=>{
    const{identificacion, nombre_completo, correo_electronico, telefono_fijo, genero, ipodeadministracion}=req.body;

    let docente = [identificacion, nombre_completo, correo_electronico, telefono_fijo, genero, ipodeadministracion];

    let nuevoDocente = `INSERT INTO Docente (identificacion, nombre_completo, correo_electronico, telefono_fijo, genero, ipodeadministracion)VALUES(?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoDocente,docente,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`Docente registrado exitosamente`});
        }
    });
});
//actualizar

router.patch('/actualizar/:identificacion', (req, res) => {
    const {nombre_completo, correo_electronico, telefono_fijo, genero, ipodeadministracion} = req.body;

    const { identificacion } = req.params;

    mysqlConnection.query(`UPDATE Docente SET nombre_completo = ?, correo_electronico = ?, telefono_fijo = ?, genero = ?, ipodeadministracion = ? WHERE identificacion = ?`,

        [nombre_completo, correo_electronico, telefono_fijo, genero, ipodeadministracion, identificacion], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `docente Actualizado` });
            } else {
                console.log(err);
            }
        });
});

//bucar docente
router.get('/buscar/:identificacion',(req,res)=>{
    const {identificacion} = req.params;
    mysqlConnection.query('SELECT * FROM Docente WHERE identificacion =?', [identificacion],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
})

//eliminar docente
router.delete('/eliminar/:identificacion', (req,res) => {
    const {identificacion} = req.params;
    mysqlConnection.query('DELETE FROM Docente WHERE identificacion=?', [identificacion], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'docente eliminado'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;
