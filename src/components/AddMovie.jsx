import React, { Component } from 'react';

class AddMovie extends Component {

    constructor() {
        super()
        this.state = {
            title: "",
            genre: "",
            poster: "",
            rating: ""
        }
    }

    handleInput = (e) => {
        let id = e.target.id
        let value = e.target.value
        this.setState({
            [id]: value
        })
    }

    addNewMovie = () => {
        if (this.state.title === "" || this.state.genre === "" || this.state.poster === "" || this.state.poster === ""){
            alert("Something is missing")
            return
        }
        this.props.addNewMovie(this.state)
    }

    render() {
        return (
            <div id="addMovieModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Add A Movie</h4>
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="title">Title:</label>
                                <input type="text" className="form-control" id="title" onChange={this.handleInput}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="genre">Genre:</label>
                                <input type="text" className="form-control" id="genre" onChange={this.handleInput}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="rating">Rating:</label>
                                <input type="text" className="form-control" id="rating" onChange={this.handleInput}></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="picture">Picture URL:</label>
                                <input type="text" className="form-control" id="poster" onChange={this.handleInput}></input>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-dismiss="modal" onClick={this.addNewMovie}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddMovie;