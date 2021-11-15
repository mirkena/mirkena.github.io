var express = require('express');
var app = express();

app.set("view engine", "pug")



app.get('/', function (req, res) {
    var sql = require("mssql");
    // config for your database
    var config = {
        user: 'sa',
        password: 'mypassword',
        server: 'localhost',
        database: 'SchoolDB',
        options: { trustServerCertificate: true }
    };
    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
        // query to the database and get the records
        request.query('select * from Student', function (err, recordset) {
            if (err) console.log(err)
            // send records as a response
           // res.send(recordset);    replaced by code below
           res.render('StudentList', { studentList: recordset.recordsets[0] });
        });
    });
});
var server = app.listen(5000, function () { // start the server
    console.log('Server is running..');
});