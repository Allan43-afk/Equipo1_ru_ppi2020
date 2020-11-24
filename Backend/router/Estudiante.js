const express = require("express");
const routes = express.Router();
const mysqlConnection = require("../db/db");
const router = require("./routes");

//nffs
router.get('/estudiante', (req, res) => {
    mysqlConnection.query('SELECT * FROM ESTUDIANTE', (err, rows, fields) => {
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

//agregar estudiante nuevo

router.post('/nuevo-estudiante',(req,res)=>{
    const{identificacion, nombre_completo, fecha_nacimiento, correo_electronico, grado, genero, dirreccion, nombredel_acudiente, telefono_acudiente}=req.body;

    let estudiante = [identificacion, nombre_completo, fecha_nacimiento, correo_electronico, grado, genero, dirreccion, nombredel_acudiente, telefono_acudiente];

    let nuevoEstudiante = `INSERT INTO Estudiante (identificacion, nombre_completo, fecha_nacimiento, correo_electronico, grado, genero, dirreccion, nombredel_acudiente, telefono_acudiente)VALUES(?,?,?,?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoEstudiante,estudiante,(err,results,fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`Estudiante registrado exitosamente`});
        }
    });
});

router.put('/estudiantes/:identificacion', (req, res) => {
    const {nombre_completo, fecha_nacimiento, correo_electronico, grado, genero, dirreccion, nombredel_acudiente, telefono_acudiente} = req.body;

    const { identificacion } = req.params;

    mysqlConnection.query(`UPDATE Estudiante SET nombre_completo = ?, fecha_nacimiento = ?, correo_electronico = ?, grado = ?, genero = ?, dirreccion = ?, nombredel_acudiente = ?, telefono_acudiente = ? WHERE identificacion = ?`,

        [nombre_completo, fecha_nacimiento, correo_electronico, grado, genero, dirreccion, nombredel_acudiente, telefono_acudiente, identificacion], (err, rows, fields) => {
            if (!err) {
                res.json({ status: `estudiante Actualizado` });
            } else {
                console.log(err);
            }
        });
});

//bucar estudiante
router.get('/estudiantes/:identificacion',(req,res)=>{
    const {identificacion} = req.params;
    mysqlConnection.query('SELECT * FROM Estudiante WHERE identificacion =?', [identificacion],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
})

//eliminar estudiantes
router.delete('/estudiantes/:identificacion', (req,res) => {
    const {identificacion} = req.params;
    mysqlConnection.query('DELETE FROM Estudiante WHERE identificacion=?', [identificacion], (err, rows, fields) =>{
        if(!err){
            res.json({ status:'estudiante eliminado'});
        }else{
            console.log(err);
        }
    });
});

module.exports = router;