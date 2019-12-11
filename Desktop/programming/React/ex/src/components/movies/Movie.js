import React from 'react'
import { Card, CardHeader, CardBody, CardFooter } from 'react-simple-card';
import {Link} from 'react-router-dom';
import Moment from 'react-moment'

/*
const {id} = props
const {movie} = props;
const {overview} = props;
const {poster} = props;
const {date} = props;
*/

const Movie = (props) => {
    const {id,movie,overview,poster,date } = props
    return (
        <div className="col"> 
              <Card className="card">
                 <CardHeader className="header"><h3 className="movie">{movie}</h3></CardHeader>
                    <CardBody className="body">
                        <img className="poster" src={"https://image.tmdb.org/t/p/w300/"+ poster} alt="Loading..."/>
                        <h3 className="date"><Moment format="DD/MM/YYYY">{date}</Moment></h3>
                        <h5 className="overview">{overview}</h5>
                    </CardBody>
                 <CardFooter className="footer">
                     <Link to={`movies/details/${id}`} className="viewButton">
                         <button className="view" type="submit">View</button>
                     </Link>
                 </CardFooter>
                </Card>           
        </div>
    )
}

export default Movie;