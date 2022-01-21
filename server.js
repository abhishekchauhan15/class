const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidv4 } = require("uuid");

const { ExpressPeerServer } = require('peer');
const peerServer = ExpressPeerServer(server, {
  debug: true
})

app.use('/peerjs', peerServer);


app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.redirect(`/${uuidv4()}`);
});

app.get("/:room", (req, res) => {
  res.render("room", { roomId: req.params.room });
});

// when socket io is connected to server it will listen to connection event
io.on("connection", (socket) => {
  //user will join the rooom
  socket.on("join-room", (roomId, userId) => {
    socket.join(roomId);
    // console.log(`${roomId} joined the room`);
    //adding another user to the room
    socket.broadcast.to(roomId).emit("user-connected", userId);

    //reciving the msg for the user
    socket.on('message', message => {
      //sending it to frontend in the same roomId
      io.to(roomId).emit('createMessage', message);
      
    })
  });
});

server.listen(3000, () => {
  console.log("server started at port 3000");
});
