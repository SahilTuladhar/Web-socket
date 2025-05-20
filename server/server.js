import express from 'express'
import { createServer } from 'http'
require('dotenv').config()
const { Server } = require("socket.io")


const httpServer = createServer();
const socket = new Server(httpServer , {})


socket.on('connection' , (socket) => {
    console.log(socket);
    
})

httpServer.listen(process.env.PORT , () => {
    console.log(`Successfully listening on the port: ${process.env.PORT}`);
    
})