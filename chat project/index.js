const path=require('path')
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server,{origin:false})
let users={}
io.on('connect-error',err=>{
    console.log(err)
})

app.use(express.static(path.join(__dirname,'public')))
app.use(express.urlencoded({extended:true}))
app.set('view engine','pug')
app.set('views',path.join(__dirname,"views"))

app.get( '/',(req,res)=>{
    res.status(200).render('index.pug')
})
io.on('connection', socket=>{
    socket.on('new-user-joined',nam=>{
        let i=0
        console.log(nam)
        users[socket.id]=nam
        socket.broadcast.emit('user-joined',nam)
    })

    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    })
    socket.on('disconnect',message=>{
            socket.broadcast.emit('left',users[socket.id])
            delete users[socket.id] 
    })
})
console.log("hello")
server.listen(3000)