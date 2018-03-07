import React, { Component } from 'react';
import EventList from '../components/EventList';
import AddEvent from '../components/AddEvent';
import firebase from 'firebase';

export default class ManageEvent extends Component {

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
			<div className="container">
		        <div className="columns">
		          <div className="column is-3"></div>
		          <div className="column is-6">
		            <EventList db={firebase} />
		          </div>
		        </div>
		        <div className="columns">
		          <div className="column is-3"></div>
		          <div className="column is-6">
		            <AddEvent db={firebase} />
		          </div>
		        </div>
	      	</div>);
	}
}
