const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const db = mysql.createConnection({
    host:'localhost',
    user: 'irsdb',
    password:'Irshakun29',
    database: 'idol_info'
})

app.use(cors());
app.use(bodyParser.json());

db.connect();

app.get('/data',(req,res)=>{
    var sql = 'SELECT * FROM member';
    db.query(sql,(err,res1)=>{
        if(err) throw err;
        console.log(res);
        res.send(res1);
    }); 
});

app.get('/data/:nama',(req,res)=>{
    var nam=req.body.nama;
    var sql = `SELECT * FROM member WHERE nam LIKE '%${req.params.nama}%'`;
    db.query(sql,nam,(err,res1)=>{
        if(err) throw err;
        console.log(res);
        res.send(res1);
    }); 
});


app.listen(4648,'0.0.0.0',()=>{
    console.log('listening to @port 4648...');
})