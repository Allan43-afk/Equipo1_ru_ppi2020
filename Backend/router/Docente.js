const express = require("express");
const routes = express.Router();
const mysqlConnection = require("../db/db");
const router = require("./routes");


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

module.exports = router;


//bucar
router.get('/Docente/:identificacion',(req,res)=>{
    const {identificacion} = req.params; //cedula del usuario númerico entero
    mysqlConnection.query('SELECT * FROM Docente WHERE identificacion =?', [identificacion,nombrecompleto,correoelectronico,telefonofijo,telefonocelular,genero,tipodeadministrativo],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar

//actilizar
router.put('/Docente/identificacion', (req, res) => {
    const { identificacion,nombrecompleto,correoelectronico,telefonofijo,telefonocelular,genero,tipodeadministrativo } = req.body;
    const { identificacion } = req.params;
    mysqlConnection.query(`UPDATE Docente SET identificacion =?,nombrecompleto=?,correoelectronico=?,telefonofijo=?,telefonocelular=?,genero=?,tipodeadministrativo=?, WHERE identificacion=?`,
        [ identificacion,nombrecompleto,correoelectronico,telefonofijo,telefonocelular,genero,tipodeadministrativo], (err, rows, fields) => {
            if (!err) {

                res.json({ status: `Docente Actualizado` });
            } else {
                console.log(err);
            }
        })
});
//crear usuario
router.post('/nuevo-Docente', (req, res) => {
    const { identificacion } = req.body;//1 Captura
    let DocenteArreglo = [identificacion,nombrecompleto,correoelectronico,telefonofijo,telefonocelular,genero,tipodeadministrativo];// Arreglo json
    //Definir el scrip sql en una variable
    let nuevoUsuario = 'SELECT * FROM Docente(modulo,mod) value(?,?)';
    mysqlConnection.query(identificacion,  (err, results, fields) => {
        //Si hay error
        if (!err) {
            //Verdadero
            return console.error(err.message);
        } else {//Si no
            //Falso
            res.json({ message: 'Docente creado' });
        }//Fin Si
    })
})//Fin guardar un usuario

router.get('/Docente', (req, res) => {
    mysqlConnection.query('SELECT * FROM Docente', (err, rows, fiels) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})// fin