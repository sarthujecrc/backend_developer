const express = require("express");
const app = express();
const cors = require("cors");
const startServer = require("./Server/server.js");
const ConnectDb = require("./Db/Connect.js");
//
app.use(express.json());
app.use(cors());

//
ConnectDb();
startServer(app);
