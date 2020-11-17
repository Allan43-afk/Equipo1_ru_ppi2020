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

module.exports = router;