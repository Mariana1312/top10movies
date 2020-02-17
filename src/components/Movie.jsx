import React, { Component } from 'react';

class Movie extends Component {

    constructor() {
        super()
        this.state = {
            details: false
        }
    }

    showDetails = () => {
        let details = !this.state.details
        this.setState({ details })
    }

    render() {

        let movie = this.props.movie

        return (
            <div className="col-sm-12 col-lg-4 movie">
                <div onClick={this.showDetails}>
                    <span className="movieTitle">{movie.title}</span>
                    <br></br>
                    <img src={movie.poster} className="movie-img"></img>
                    {this.state.details ? <div>
                        Rating: {movie.rating}
                        <br></br>
                        Category: {movie.genre}
                    </div> : null}
                </div>
            </div>
        )
    }
}

export default Movie;