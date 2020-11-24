const mysql = require('mysql');
//Parametros de Conexion
const mysqlConnection = mysql.createConnection({
    host: 'buemiugrkzrc3yt7dd0z-mysql.services.clever-cloud.com',
    user: 'usrcn4zdci96uwoc',
    password: 'p7aSFi7ZIX6uOWcA2tU8',
    database: 'buemiugrkzrc3yt7dd0z',
    multipleStatements: true
});
//.fd
//Establecer la conexion de la bd
mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('Base de datos conectado');
    }//Fin si
})//Fin conectado 
//hola
//Al final de las funciones, callbacks, middleware
module.exports = mysqlConnection