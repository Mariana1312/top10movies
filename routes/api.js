const express = require('express')
const router = express.Router()
const fs = require('fs');

router.get("/movies", function (req, res) {
  fs.readFile("./movies.json", function (err, data) {
    if (err) throw err;
    res.send(JSON.parse(data));
  })
})

router.post("/movies", function (req, res) {

  newMovie = {
    title: req.body.title,
    genre: req.body.genre,
    poster: req.body.poster,
    rating: req.body.rating
  }

  fs.readFile("./movies.json", function (err, data) {
    if (err) throw err;
    let movies = JSON.parse(data);
    movies.sort(function (a, b) { return a.rating - b.rating }).reverse();

    if (newMovie.rating >= movies[movies.length - 1].rating) {
      movies[movies.length - 1] = newMovie;
    }
    movies.sort(function (a, b) { return a.rating - b.rating }).reverse();

    fs.writeFile("./movies.json", JSON.stringify(movies), function (err) {
      if (err) throw err;
      res.send({
        isSuccess: true,
        movies: movies
      })
    });
  })
})



module.exports = router