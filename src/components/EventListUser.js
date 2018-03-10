import React, { Component } from 'react';
import Event from './Event'
import _ from 'lodash';
import BuyTicket from './BuyTicket';
import firebase from 'firebase'

export default class EventListUser extends Component {
	componentDidMount(){
		//If component is mounted get snapShot of Database red 'event' value
		let app = this.props.db.database().ref('events');
	    app.on('value', snapshot => {
	      this.getData(snapshot.val());
    	});
	  }
	//state initialize
	state={
		events:[],
		modalDisplay:'none',
		chooseEvent:''
	}
	//Clone function that set the data of DB in the state
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
	//that showModal get the Current Event and set it to the state + Show/Hide Modal
  	showModal =(currentEvent)=>{
		this.state.modalDisplay === 'none'?
  		this.setState({
				modalDisplay:'flex',
				chooseEvent:currentEvent
			}):
			this.setState({
				modalDisplay:'none',
				chooseEvent : ''

			})
  	}
	render() {
		// array.map all the event possible
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
						{/* call Back function that share the chooseEvent to the state */}
				    	<div onClick={()=>this.showModal(event)}>Reserver</div>
				    </a>				    
				    <a href="#" className="card-footer-item">Plus d'infos</a>
				  	</footer>
				</div>
		      )
		    });
		return (
			<div>
				{messageNodes}
                <div
	        	className="modal" 
	        	style={{display:this.state.modalDisplay , backgroundColor:'black', justifyContent:'center', alignItems:'center'}} >	
	        		<div className="column is-8" style={{overflow:'scrollbar'}} >
			          	<div style={{backgroundColor:'white', padding:'50px'}}>
						  {/* Send the ChooseEvent to the BuyTickets form Props */}
			            	<BuyTicket db={firebase} closeModal={this.showModal} chooseEvent={this.state.chooseEvent} />			            	     			
			          	</div>
		        	</div>
	        	</div>
			</div>
		);
	}
}
