// Import framework express
const express = require('express');
// Import giao thức http
const http = require("http");
// Import class của thư viện socket.io
const { Server } = require('socket.io');
// Import cors
const cors = require('cors');
var port = 5000;


// Khai báo đối tượng của express
const app = express()

// Khai báo server chạy bằng giao thức http dựa trên đối tượng của express
const server = http.createServer(app);

// Tạo đối tượng đại diện cho socket.io (tích hợp thư viện vào server)
const io = new Server(server, {
    cors: {
        // Địa chỉ của front-end
        origin: `http://localhost:3000`,
        methods: ["GET", "POST"],
    },
});


io.on('connection', () => {
    console.log('A user connected');
});


// Khởi động server HTTP
server.listen(port, () => {
    console.log(`Running server at port ${port}`)
});

