import React, { Component } from 'react';
import Movie from "./Movie"

class Movies extends Component {

    constructor() {
        super()
        this.state = {
            category: ""
        }
    }

    handleInput = (e) => {
        let value = e.target.value
        this.setState({ category: value }, () => {
            this.props.movieFilter(value)
        })
    }

    render() {
        let movies = this.props.movies
        let categories = this.props.categories

        return (
            <div className="container-fluid text-center">
                <h1>ABC - Purchasing Department</h1>
                <h2>Top 10 Movies</h2>
                <div className="row ">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <select className="form-control" id="category" onChange={this.handleInput}>
                            <option value="disabled">Category</option>
                            {categories.map((c, i) => <option value={c} key={i}>{c}</option>)}
                        </select>
                        <button type="button" className="btn btn-info" data-toggle="modal" data-target="#addMovieModal">Add a movie</button>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
                <div className="row content">
                    <div className="col-sm-12">
                        {movies.map((m, i) => <Movie key={i} movie={m} />)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Movies;