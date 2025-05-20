import logo from './logo.svg';
import {io} from 'socket.io-client'
import './App.css';
import { useEffect, useState } from 'react';

//connecting front end client to web-socket server

const socket = io('http://localhost:4000');

function App() {

  const [message , setMessage] = useState('')

  useEffect(() => {

    // when connected 
    socket.on('connect', (res) => {
        console.log('succesfully connected to the Socket server');
        console.log(res);
        
    })

    //when server sends a message
     
    socket.on('messageFromServer' , (data) => {
        console.log(data);
        setMessage(data)
        
    })

    // Clean up on component unmount

    return () => {

      // only disconnect if the page is about to unload 
      if(process.env.NODE_ENV === 'production'){
        socket.disconnect();
      }
      
    }

  } , [])

  return (
    <div className="App">
      
      <h1> WebSocket with React</h1>
      <p> Server says: {message}</p>
    </div>
  );
}

export default App;
