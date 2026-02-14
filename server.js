const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mongoose = require("mongoose");
const Document = require("./models/Document");

const app = express();
const server = http.createServer(app);

// Socket.IO
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

// MongoDB connection
mongoose
  .connect("mongodb://127.0.0.1:27017/collabEditor")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// In-memory copy (syncs with DB)
let documentContent = "";

// Load document from MongoDB when server starts
const loadDocument = async () => {
  const doc = await Document.findOne();
  if (doc) {
    documentContent = doc.content;
  } else {
    const newDoc = new Document({ content: "" });
    await newDoc.save();
  }
};

loadDocument();

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // Send saved content to new user
  socket.emit("receive-changes", documentContent);

  socket.on("send-changes", async (data) => {
    documentContent = data;

    // Save to MongoDB
    await Document.findOneAndUpdate(
      {},
      { content: data },
      { upsert: true }
    );

    // Send to other users
    socket.broadcast.emit("receive-changes", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
