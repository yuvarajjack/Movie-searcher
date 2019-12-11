import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layouts/navBar'
import Index from './components/layouts/Index'
import {BrowserRouter as Router,Route, Switch}  from 'react-router-dom'
import {Provider} from './context';
import Details from './components/movies/Details'

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Index}/>
            <Route exact path='/movies/details/:id' component={Details}/> 
          </Switch>
        </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
