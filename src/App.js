import React, { Component } from 'react';
import axios from 'axios'
import Movies from "./components/Movies"
import AddMovie from "./components/AddMovie"
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      movies: [],
      categories: [],
      matchingMovies: []
    }
  }

  movieFilter = (category) => {
    let matchingMovies = category === "disabled" ? this.state.movies : this.state.movies.filter(m => category === m.genre)
    this.setState({ matchingMovies })
  }

  async componentDidMount() {
    await axios.get("http://localhost:3030/movies")
      .then((response) => {
        this.updateStateFromMovies(response.data)
      })
  }

  updateStateFromMovies = (movies) => {
    movies.sort(function (a, b) { return a.rating - b.rating }).reverse();
    let categories = {}
    movies.forEach(m => categories[m.genre] = true)
    categories = Object.keys(categories)
    this.setState({ movies, categories })
  }

  addNewMovie = (movie) => {
    this.postMovie(movie)
  }

  async postMovie(movie) {
    await axios.post("http://localhost:3030/movies", movie)
      .then((response) => {
        if (response.data.isSuccess) {
          this.updateStateFromMovies(response.data.movies)
        }
      })
  }

  render() {
    return (
      <div>
        <AddMovie addNewMovie={this.addNewMovie} />
        {this.state.matchingMovies.length === 0 ?
          <Movies movies={this.state.movies} movieFilter={this.movieFilter} categories={this.state.categories} /> :
          <Movies movies={this.state.matchingMovies} movieFilter={this.movieFilter} categories={this.state.categories} />}
      </div>
    )
  }
}

export default App;
