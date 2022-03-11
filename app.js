const express = require("express");
const socket = require("socket.io");

const app = express();//Initialising application and server ready

app.use(express.static("public"));

let port = 5000;
let server = app.listen(port, ()=>{
    console.log("listening to port" + port);
})

let io =socket(server);
io.on("connection",(socket) =>{
    console.log("made socket connection");

    socket.on("beginPath",(data)=>{
        //   data has been recieved in data variable to the server now we will transfer to all connected nodes via socket
        io.sockets.emit("beginPath", data); 
    })

    socket.on("drawStroke",(data)=>{
        io.sockets.emit("drawStroke",data);
    })

    socket.on('redoUndo',(data)=>{
        io.sockets.emit("redoUndo", data);
    })

})


