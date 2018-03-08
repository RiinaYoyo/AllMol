import React, { Component } from 'react';
import Event from './Event'
import _ from 'lodash';

export default class EventListUser extends Component {
	componentDidMount(){
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
				  <div class="card-image">
				    <figure class="image is-4by3">
				      <img src={event.img} alt="Placeholder image"/>
				    </figure>
				  </div>
				  <div class="card-content">
				    <div class="media">
				      <div class="media-left">
				        <figure class="image is-48x48">
				          <img src={event.img} alt="Placeholder image"/>
				        </figure>
				      </div>
				      <div class="media-content">
				        <p class="title is-4">{event.name}</p>
				        <p class="subtitle is-6">{event.Nbr} places disponibles</p>
				      </div>
				    </div>

				    <div class="content">
				      {event.desc}
				      <br/>
				    </div>				   
				  </div>
				   <footer className="card-footer">
				    <a href="#" className="card-footer-item">Reserver</a>
				    <a href="#" className="card-footer-item">Plus d'infos</a>
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
