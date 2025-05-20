import { log } from 'console'
import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import { createServer } from 'http'
import {Server} from 'socket.io'

const PORT = process.env.PORT 

const app = express()
const httpServer = createServer(app);

const socket = new Server(httpServer , {
    cors:{
        origin: process.env.CORS_ORIGIN
    }
})


socket.on('connection' , (socket) => {

    console.log("Client has been connected to the web-socket server");
    
    // console.log(socket);

    // sending some message to the client from the server
    socket.emit('messageFromServer' , 'Helllo from the web-socket server')

    //handle component unmount
    socket.on('disconnect' , () => {
        console.log('Client has been disconencted from the server' , socket.id);
        
    })
    
})

httpServer.listen(PORT , () => {
    console.log(`Successfully listening on the port: ${PORT}`);
    
})