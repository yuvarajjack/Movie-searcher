import React,{Component} from 'react';
import './App.css';
import Navbar from './components/layout/navBar'
import Index from './components/layout/Index'
import {BrowserRouter as Router,Route, Switch}  from 'react-router-dom'
import {Provider} from './context';

function App() {
  return (
    <Provider>
    <Router>
      <React.Fragment>
        <Navbar/>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Index}/>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
