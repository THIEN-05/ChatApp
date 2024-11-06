// Import framework express
const express = require('express')
// Import giao thức http
const http = require('http')
// Import class của thư viện socket.io
const {Server} = require('socket.io')



// Khai báo đối tượng của express
const app = express()

// Khai báo server của express chạy bằng giao thức http
const server = http.createServer(app);

// Khai báo đối tượng của class Server
// Biến để kết nối với thư viện socket.io
const io =  new Server(server)




// Khởi động server HTTP
server.listen(5000, () =>{
    console.log('Running server at port 5000')
})

