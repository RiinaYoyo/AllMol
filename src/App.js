import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase'
import Header from './components/Header';
import ManageEvent from './page/ManageEvent';
import Home from './page/Home'
import {
  HashRouter,
  Route,
  Redirect,
} from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCtpIWfOOMGSziO8Kk-dYrQnjTUPWExvjI",
      authDomain: "billet-allmoll.firebaseapp.com",
      databaseURL: "https://billet-allmoll.firebaseio.com",
      projectId: "billet-allmoll",
      storageBucket: "billet-allmoll.appspot.com",
      messagingSenderId: "114897118270"
    };
    firebase.initializeApp(config);
  }

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
