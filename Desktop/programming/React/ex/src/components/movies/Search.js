import React, { Component } from 'react'
import axios from 'axios'
import {Consumer} from '../../context'
class Search extends Component {
    state = {
        movieTitle : ''
    }


    findMovie = (dispatch,e) => {
        e.preventDefault();
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=${this.state.movieTitle}&page=1&include_adult=false`)
            
            .then(res => {
                console.log(res.data);
                dispatch({
                    type: 'SEARCH_MOVIES',
                    payload: res.data.results
                });
                this.setState({movieTitle: ''})                            
            
            })
            .catch(err => console.log(err))


    }


    onChange = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch} = value;
                    return(
                     <form onSubmit={this.findMovie.bind(this, dispatch)}>
                        <div className="search">
                            <input 
                                className="search" 
                                type="text" 
                                placeholder="Enter a Movie Name or Genre..." 
                                name="movieTitle"
                                value={this.state.movieTitle}
                                //use onChange to type in the inpu
                                onChange={this.onChange}
                                />
                                <button className="submit" type="submit">Search</button>
                        </div>
                    </form>
                    )
                }}
            </Consumer>

        )
    }
}

export default Search