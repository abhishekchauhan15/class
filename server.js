const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const path = require("path");
const cookie =require('cookie-session')
const passport = require('passport')
const flash =require('express-flash')
const mongoose =require('mongoose');

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8000 ;

// const { ExpressPeerServer } = require("peer");
// const peerServer = ExpressPeerServer(server, {
//   debug: true,
// });


const login = require("./routes/auth/login");
const signup = require("./routes/auth/signup");
const logout = require("./routes/auth/logout");


// const { spawn } = require('child_process');
//taking the data
// const child_process = spawn('python', ['test.py']);
//giving the data
// const child_process = spawn('python', ['test.py', 'testing'])

// child_process.stdout.on('data', (data) => {
//   console.log(`${data}`);
// });

// child_process.stderr.on('data', (data) => {
//   console.log(` error: ${data}`);
// });

// child_process.on('close', (code) => {
//   console.log(`child process exited with code ${code}`);
// });

// app.use("/peerjs", peerServer);

// app.use(express.static("public"));

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.redirect(`/${uuidv4()}`);
// });

// login
// app.use("/login", login);

// signup
// app.use("/signup", signup);

// logout
// app.use("/logout", logout);

// // video room
// app.use("/", videoRoom);

// app.get("/:room", (req, res) => {
//   res.render("room", { roomId: req.params.room });
// });

// when socket io is connected to server it will listen to connection event
// io.on("connection", (socket) => {
//   //user will join the rooom
//   socket.on("join-room", (roomId, userId) => {
//     socket.join(roomId);
//     // console.log(`${roomId} joined the room`);
//     //adding another user to the room
//     socket.broadcast.to(roomId).emit("user-connected", userId);

//     //reciving the msg for the user
//     socket.on("message", (message) => {
//       //sending it to frontend in the same roomId
//       io.to(roomId).emit("createMessage", message);
//     });
//   });
// });

server.listen(port, () => {
  console.log(`port started at ${port}`);
});
