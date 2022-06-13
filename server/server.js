const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config();

const port = 3001;
const app = express();

const server = http.Server(app);

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/tracks", require("./routes/tracksRoute"));
app.use("/api/playback/play", require("./routes/playbackRoutes"));

server.listen(port, () => {
  console.log(`LISTENING ON PORT: ${port}...`);
});

const io = new Server(server, {
  cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] },
});

io.on("connection", (client) => {
  console.log(`User with id: ${client.id} has connected...`);
});
