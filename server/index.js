// Import framework express
const express = require('express')
// Import giao thức http
const http = require('http')
// Import class của thư viện socket.io
const { Server } = require('socket.io')
// 
const cors = require('cors')

var port = 5000;


// Khai báo đối tượng của express
const app = express()

// Khai báo server của express chạy bằng giao thức http
const server = http.createServer(app);

// Khai báo đối tượng của class Server
// Biến để kết nối với thư viện socket.io
const io = new Server(server, {

    cors: {
        origin: `http://localhost:${port}`,
        methods: ["GET", "POST"],
    },
});


io.on('connection', (socket) => {
    console.log('A user connected');
});


// Khởi động server HTTP
server.listen(port, () => {
    console.log(`Running server at port ${port}`)
});

