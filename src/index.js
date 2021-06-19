const express = require('express');
const path =require('path');
const socketIO=require('socket.io');
const http=require('http');
//inicia
const app=express();
const server=  http.createServer(app);
const io = socketIO(server);

//configuracion
app.set('port', process.env.PORT || 8082);
//sockets
require('./sockets')(io);
//static files
app.use(express.static(path.join(__dirname,'public')));
//C:\Users\dan5-\Desktop\Nueva carpeta\dibujo\src\public


//star server
server.listen(app.get('port'),()=>{

  console.log('server on port',app.get('port')); 
});