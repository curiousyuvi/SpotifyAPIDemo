const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const port = 3001;
const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));
app.use("/api/tracks", require("./routes/tracksRoute"));

app.listen(port, () => {
  console.log(`LISTENING ON PORT: ${port}...`);
});
