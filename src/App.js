import React, { Component } from 'react';
import './App.css';//import Css Rules
import firebase from 'firebase' //Firebase Package
import Header from './components/Header'; //Header and Navbar
import ManageEvent from './page/ManageEvent'; // Page admin
import Home from './page/Home' //Page User
import {
  HashRouter,
  Route,
  Redirect, 
} from 'react-router-dom'; //Router

class App extends Component {
  //Configuration of the firebase DataBase
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
      <div>{/* Configure the router  */}
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
