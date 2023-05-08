const http = require("http");
const express = require("express");
const socketIo = require("socket.io");

const PORT = process.env.port || 4001;
const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);

const io = socketIo(server, {
  cors: {
    origin: "*",
  },
}); // Bind socket.io to our express server

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline')
const port = new SerialPort({ path: 'COM3', baudRate: 9600 }, err => {
    console.log(err)
}); // Connect serial port to port COM3

const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' })); // Read the line only when new line comes
parser.on('data', (level) => {
    console.log(level)
    const today = new Date();
    io.sockets.emit('airQuality', {
        time: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(),
        airQualityLevel: level
    }); // Emit data {date, time, airQualityLevel} to all connected clients
});

io.on("connection", (socket) => {
  console.log("A client has connected!"); // Show a log when a new client connects
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Start the server, listening on port 4001
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
