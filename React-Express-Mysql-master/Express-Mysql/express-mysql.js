const express = require('express');
const app     = express();
const mysql   = require('mysql');
const cors    = require('cors');
const bodyParser = require('body-parser')
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'toko'
});
db.connect();

app.use(cors());
app.use(bodyParser.json());

app.get('/data', function(req,res){
    var sql = 'select * from siswa';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/data', function(req,res){
    var data = {nama:req.body.nama, usia:req.body.usia}
    var sql = 'INSERT INTO siswa SET ?';
    db.query(sql,data,(err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
})

app.listen(3200, ()=>{
    console.log('Server @Port 3200')
});
