import React, { Component } from 'react'
import {Consumer} from '../../context'
import Spinner from '../layouts/Spinner'
import Movie from './Movie'

class Movies extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const {movie_list} = value;
                    if(movie_list === undefined || movie_list.length === 0){
                        return <Spinner />
                    }else {
                        return (
                            <React.Fragment>
                                <h1 className="App">Movie Results</h1>
                                <div className="row">
                                    { movie_list.map(item => (
                                         <Movie key={item.id} movie={item.title} overview={item.overview} poster={item.poster_path} date={item.release_date} id={item.id}/> 
                                         
                                    ))}

                                </div>
                            </React.Fragment>

                        )
                    }
                }}
            </Consumer>
        )
    }
}

export default Movies;