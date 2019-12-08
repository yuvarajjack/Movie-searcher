import React, { Component } from 'react'
import axios from 'axios'
const Context = React.createContext();


export class Provider extends Component {
    state = {
        movie_list:[]
    };

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=String&page=2&include_adult=false`)
            
            .then(res => {
                console.log(res.data);
                this.setState({movie_list: res.data.page})
                
            
            })
            .catch(err => console.log(err))

    }
    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;