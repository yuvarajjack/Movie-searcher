import React, { Component } from 'react'
import axios from 'axios'


const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_MOVIES':
            return{
                ...state,
                movie_list: action.payload
            };
            default:
                return state;
    }
}


export class Provider extends Component {
    state = {
        movie_list:[],
        dispatch: action => this.setState(state => reducer(state, action))

    };

    componentDidMount(){
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIE_API}&language=en-US&query=man&page=1&include_adult=false`)
            
            .then(res => {
                //console.log(res.data);
                this.setState({movie_list: res.data.results})                            
            
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