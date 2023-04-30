import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import './App.css';
import Navbar from './Navbar';
import AppBody from './AppBody';
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4001";

function App() {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("airQuality", data => {
      setResponse(data);
    });
  }, []);

  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Grid item xs={12}>
        <AppBody airQualityData={response} />
      </Grid>
    </Grid>
  );
}

export default App;
