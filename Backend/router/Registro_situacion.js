const express = require("express");
const routes = express.Router();
const mysqlConnection = require("../db/db");
const router = require("./routes");

router.get('/Registro_situacion', (req, res) => {
    mysqlConnection.query('SELECT * FROM Registro_situacion', (err, rows, fields) => {
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
router.get('/Registro_situacion/consecutivo',(req,res)=>{
    const {consecutivo} = req.params; //consecutivo 
    mysqlConnection.query('SELECT * FROM Registro_situacion WHERE consecutivo =?', [consecutivo],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar

//actilizar
router.put('/Registro_situacion/consecutivo', (req, res) => {
    const { consecutivo, tipo, descripcion, fechareportesistema, idusuario, estado, fecharevision, identificaciondocenterevision, observaciones } = req.body;
    const { consecutivo } = req.params;
    mysqlConnection.query(`UPDATE Registro_situacion SET consecutivo=?, tipo=?, descripcion=?, fechareportesistema=?, idusuario=?, estado=?, fecharevision=?, identificaciondocenterevision=?, observaciones=?, WHERE consecutivo=?`,
        [ consecutivo, tipo, descripcion, fechareportesistema, idusuario, estado, fecharevision, identificaciondocenterevision, observaciones], (err, rows, fields) => {
            if (!err) {

                res.json({ status: `Registro_situacion Actualizado` });
            } else {
                console.log(err);
            }
        })
});
//crear usuario
router.post('/nuevo-Registro_situacion', (req, res) => {
    const { consecutivo } = req.body;//1 Captura
    let consecutivoArreglo = [consecutivo, tipo, descripcion, fechareportesistema, idusuario, estado, fecharevision, identificaciondocenterevision, observaciones];// Arreglo json
    //Definir el scrip sql en una variable
    let nuevoUsuario = 'SELECT * FROM Registro_situacion(modulo,mod) value(?,?)';
    mysqlConnection.query(consecutivo, (err, results, fields) => {
        //Si hay error
        if (!err) {
            //Verdadero
            return console.error(err.message);
        } else {//Si no
            //Falso
            res.json({ message: 'Reporte de situacion exitosa' });
        }//Fin Si
    })
})//Fin guardar un usuario
router.get('/Registro_situacion', (req, res) => {
    mysqlConnection.query('SELECT * FROM Registro_situacion ', (err, rows, fiels) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})// fin
