import React, { Component } from 'react';
import Event from './Event'
import _ from 'lodash';
import BuyTicket from './BuyTicket'

export default class EventListUser extends Component {
	componentDidMount(){
		let app = this.props.db.database().ref('events');
	    app.on('value', snapshot => {
	      this.getData(snapshot.val());
    	});
  	}
	state={
		events:[],
		modalDisplay:'none'
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
  	showModal =()=>{
		this.state.modalDisplay === 'none'?
  		this.setState({
				modalDisplay:'block'
			}):
			this.setState({
				modalDisplay:'none'
			})
  	}
	render() {
		let messageNodes = this.state.events.map((event) => {
			return (
				<div className="card" style={{margin:'30px'}} >
				  <div className="card-image">
				  	<div class="media-content">
				        <p class="title">{event.name}</p>
				        <p class="subtitle">{event.desc}</p>
				        <p> {event.nbr} billets restant </p>
      				</div>
			    	<figure className="image">
			      		<img src={event.img} alt="Placeholder image"/>
			    	</figure>
				  	</div>
				  	<div className="card-content">
				  	<div class="media-content">
				        <p> <strong>Date :</strong> {event.date}</p>
				        <p> <strong>Hours :</strong> {event.hours}</p>
				        <p> <strong>Location : </strong>{event.location}</p>
  					</div>
				    			   
				  </div>
				   	<footer className="card-footer">				   
				    <a href="#" className="card-footer-item">
				    	<div onClick={this.showModal}>Reserver</div>
				    </a>				    
				    <a href="#" className="card-footer-item">Plus d'infos</a>
				  	</footer>
				  	<div className="modal" 
		        	style={{display:this.state.modalDisplay , backgroundColor:'black'}} >	
		        		<div className="columns" style={{overflow:'scrollbar',height: '100%',display: 'flex', alignItems:'center'}} >
				          	<div className="column is-3"></div>
				          	<div className="column is-6"  
				          	style={{backgroundColor:'white'}}>
				            	<BuyTicket closeModal={this.showModal}
				            	currentEvent={event.key}
				            	ticketLeft={event.nbr} />	
				          	</div>
			        	</div>
		        	</div>
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
