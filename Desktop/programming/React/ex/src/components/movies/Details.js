import React, { Component } from "react";
import axios from 'axios'
import Spinner from '../layouts/Spinner';
import {Link} from 'react-router-dom';
import Moment from 'react-moment'


import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';



class Details extends Component{
    state= {
        details: {},
        list : {}
    }
    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/movie/${this.props.match.params.id}?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&append_to_response=videos`)
            
            .then(res => {
                console.log(res.data);
                this.setState({details:res.data})
            return  axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=man&page=1&include_adult=false`)
            
            .then(res => {
                //console.log(res.data.results);
                this.setState({list: res.data.results})
                
            })    
                
            
            })
            .catch(err => console.log(err))

    }
    render() {
        const {details,list} = this.state
        if(details === undefined || Object.keys(details).length === 0 || list === undefined || Object.keys(list).length === 0){
            return <Spinner/>
        }else{
            return (
                <React.Fragment>
                    <Link to='/'>
                        <button className="back" type="submit">Go Back!</button>
                    </Link>
                    <div className="col">
                        <Card className="card">
                             <CardHeader className="header"><h3 className="movie">{details.title}</h3></CardHeader>
                             <CardBody className="body">
                                 <div>
                                 <img className="poster" src={"https://image.tmdb.org/t/p/w300/"+ details.poster_path }alt="Loading"></img>
                                 <h5 className="overview">{details.overview}</h5>
                                 <h3><Moment format="DD/MM/YYYY">{details.release_date}</Moment></h3>
                                 </div>
                             </CardBody>
                             <CardFooter>
                                    <div>
                                        <h3>Profit : {details.revenue}</h3>
                                        <h3>Language : {details.original_language}</h3> 
                                        <h3>Budget: {details.budget}</h3>
                                        <h3>Runtime: {details.runtime}</h3>
                                        <h3>Status: {details.status}</h3>
                                        <strong>Movie Generes:</strong>
                                        <h4>{details.genres[0].name}, {details.genres[1].name},{details.genres[2].name}</h4>
                                        
                                    </div>
                                    <div>                                

                                    </div>
                                    
                             </CardFooter>
                        </Card>
                    </div>
                </React.Fragment>
            )
        }
    }
}
export default Details;
