const express = require("express");
const CORS = require("cors");

const moviesRouter = require('./movies/moviesRouter');
const server = express();

server.use(express.json());
server.use(CORS());
server.use('/api/movies', moviesRouter)

server.put("/api/movies/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the movie id");
  if (
    req.body.id === undefined ||
    !req.body.title ||
    !req.body.director ||
    !req.body.metascore ||
    !req.body.stars
  ) {
    res
      .status(422)
      .send("Make sure your request body has all the fields it needs");
  }
  movies = movies.map(movie => {
    if (`${movie.id}` === req.params.id) {
      return req.body;
    }
    return movie;
  });
  res.status(200).send(req.body);
});

server.delete("/api/movies/:id", (req, res) => {
  if (!req.params.id)
    res.status(400).send("Your request is missing the movie id");
  movies = movies.filter(movie => `${movie.id}` !== req.params.id);
  res.status(202).send(req.params.id);
});

server.get("/", function(req, res) {
  res.send("server is working 👍");
});

module.exports = server;