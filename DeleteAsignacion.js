const express = require('express');
const app = express();
const mysql = require('mysql');
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "servicio1",
  password: "servicio1.123",
  database: "Mobasign"
});

connection.connect();


app.delete('/rest/asignacion', function (req, res) {
   console.log(req.body);
   connection.query('DELETE FROM `Asignacion_Mobiliario` WHERE `Id_Asignacion`=?', [req.body.Id_Asignacion], function (error, results, fields) {
    if (error) throw error;
    res.end('Record has been deleted!');
  });
});

app.listen(9843, function () {
 console.log('Node app is running on port 9843');

});