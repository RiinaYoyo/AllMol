import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import ManageEvent from './page/ManageEvent';
import Home from './page/Home'
import {
  HashRouter,
  Route,
  Redirect,
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter> 
            <div className="app">
                <Header/>
                <Route  exact path='/'  component={Home}/>
                <Route path='/Manage'  component={ManageEvent}/>
            </div>
        </HashRouter>
</div>
    );
  }
}

export default App;
