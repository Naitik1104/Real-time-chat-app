const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const { Server } = require("socket.io");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection

const uri = 'mongodb://localhost:27017/chatDB'; // For local MongoDB
// const uri = 'mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority'; // For MongoDB Atlas

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('DB Connection Error:', err));

// Start Server
const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

// WebSocket Setup
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});


io.on('connection', (socket) => {
    console.log('A user connected');
    socket.on('message', (data) => {
        io.emit('message', data); 
    });
});

  

