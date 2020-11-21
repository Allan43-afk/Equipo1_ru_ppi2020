const routes = express.Router();
const mysqlConnection = require("../db/db");
const router = require("./routes");


router.get('/usuario', (req, res) => {
    mysqlConnection.query('SELECT * FROM USUARIO', (err, rows, fields) => {
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

//bucar
router.get('/usuario/id',(req,res)=>{
    const {id} = req.params; 
    mysqlConnection.query('SELECT * FROM USUARIO WHERE id =?', [cedula],(err,rows,fields)=>{
        if(!err){
            res.json(rows[0])
        }else{
            console.log(err);
        }
    })
}) // fin buscar

//actualizar
router.put('/usuario/:id',(req,res)=>{
    const {id} = req.params; 
    mysqlConnection.query('UPDATE Usuario ', [id, nombre,apellido, contraseña,estado, correo],(err,rows,fields)=>{
        if(!err){
            res.json({status: 'Usuario actualizado'});
        }else{
            console.log(err);
        }
    })
})//fin actualizar

//eliminar
router.delete('/usuario/:id',(req,res)=>{
    const {id} = req.params; 
    mysqlConnection.query('DELETE * FROM USUARIO WHERE id = ?', [id],(err,rows,fields)=>{
        if(!err){
            res.json({status: 'Usuario eliminado'});
        }else{
            console.log(err);
        }
    })
})//fin eliminar

//crear usuario
router.post('/nuevousuario', (req, res) => {
    const { id, usuarioprefijo } = req.body;//1 Captura
    let usuarioArreglo = [u, usuarioprefijo];// Arreglo json
    //Definir el scrip sql en una variable
    let nuevoUsuario = 'SELECT * FROM Usuario (modulo,mod) value(?,?)';
    mysqlConnection.query(nuevoUsuario, usuarioArreglo, (err, results, fields) => {
        //Si hay error
        if (!err) {
            //Verdadero
            return console.error(err.message);
        } else {//Si no
            //Falso
            res.json({ message: 'usuario creado' });
        }//Fin Si
    })
})//Fin guardar un usuario

router.get('/usuario', (req, res) => {
    mysqlConnection.query('SELECT * FROM U(', (err, rows, fiels) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
})// fin

module.exports = router;