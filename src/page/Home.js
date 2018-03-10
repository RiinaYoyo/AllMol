import React, { Component } from 'react';
import firebase from 'firebase';
import EventListUser from '../components/EventListUser' //Event List for the User

export default class Home extends Component {
	render() {//Page render the EventList for User
		return (
			<div className="container">
				<div className="columns">
		        	<div className="column is-3"></div>
	        		<div className="column is-6">
		            	<EventListUser db={firebase}/>
	        		</div>
	        	</div>
			</div> 
		);
	}
}
