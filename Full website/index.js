const path=require('path');
const express=require('express');
const { writeFileSync } = require('fs');
app=express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res)=>{
    res.status(200).render('index.pug');
});

app.post('/',(req,res)=>{
    res.status(200).render('index.pug');
    console.log(req.body);
    writeFileSync('./hello.txt',JSON.stringify(req.body));
});

app.listen(80,'192.168.1.3');