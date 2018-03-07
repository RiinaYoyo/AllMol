import React, { Component } from 'react';
import Event from './Event'
import _ from 'lodash';

export default class EventList extends Component {
	constructor(props){
		super(props);
		let app = this.props.db.database().ref('events');
	    app.on('value', snapshot => {
	      this.getData(snapshot.val());
    });
  	}
	state={
		events:[],
	}
	 getData(values ){
	    let eventsVal = values;
	    let events = _(eventsVal)
                      	.keys()
                      	.map(eventKey => {
                          	let cloned = _.clone(eventsVal[eventKey]);
                          	cloned.key = eventKey;
                          	return cloned;
                      	})
                      	.value();
      	this.setState({
        	events: events
      	});
  	}
	render() {
		console.log(this.state)
		let messageNodes = this.state.events.map((event) => {
		return (
	        <div class="card">
			  <header class="card-header">
			    <p class="card-header-title">
			      {event.name}
			    </p>
			    <a href="#" class="card-header-icon" aria-label="more options">
			      <span class="icon">
			        <i class="fas fa-angle-down" aria-hidden="true"/>
			      </span>
			    </a>
			  </header>
			  <div class="card-content">
			    <div class="content">
			      <p>{event.desc}</p>
			      <br/>
			    </div>
			  </div>
			  <footer class="card-footer">
			    <a href="#" class="card-footer-item">delete</a>
			    <a href="#" class="card-footer-item">Edit</a>
			    <div href="#" class="card-footer-item">{event.Nbr}tickets</div>
			  </footer>
			</div>
	      )
	    });
		return (
			<div>
				{messageNodes}
			</div>
		);
	}
}
