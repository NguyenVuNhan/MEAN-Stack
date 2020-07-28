const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const api = require("./server/routes/api");

const port = 3000;

const app = express();

app.use(
  cors({
    origin: "*"
  })
);
app.use(express.static(path.join(__dirname, "dist/ngApp")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", api);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

app.listen(port, () => {
  console.log("Server running on local host port:" + port);
});
