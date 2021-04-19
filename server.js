const express = require("express");
const CORS = require("cors");

const moviesRouter = require('./movies/moviesRouter');
const server = express();

server.use(express.json());
server.use(CORS());
server.use('/api/movies', moviesRouter)

server.get("/", function(req, res) {
  res.send("server is working 👍");
});

module.exports = server;