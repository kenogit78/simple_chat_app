const app = require('express')();
const http = require('http');
const server = http.createServer(app);
const socket = require('socket.io')
const io = socket(server);


io.on('connection', socket => {
    console.log('client connected');
    socket.emit('your id', socket.id);

    socket.on('send message', body => {
        io.emit('message', body)
    })
} )

const port = process.env.PORT || 8000;

server.listen(port, ()=> console.log('server is running on port: 8000'))
