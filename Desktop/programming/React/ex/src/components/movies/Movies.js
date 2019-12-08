import React, {Component} from 'react';
import { Consumer } from '../../context'
import Spinner from '../layout/Spinner'
import Movie from './Movie'

class Movies extends Component{
    render(){
        return(
            <Consumer>
                {value => {
                    const {movie_list} =value;
                    if(movie_list === undefined || movie_list.length === 0){
                        return <Spinner/>
                    }else{
                        <React.Fragment>
                        <div className="row">
                            {movie_list.map(item =>(
                                <Movie key ={item.movie.movie_id}movie={item.movie}/>
                            ))}

                        </div>
                        </React.Fragment>
                    }

                }}
            </Consumer>

        )
    }
}

export default Movies;