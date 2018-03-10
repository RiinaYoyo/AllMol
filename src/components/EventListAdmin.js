import React, { Component } from 'react';
import Event from './Event'
import _ from 'lodash';

export default class EventListAdmin extends Component {
	componentDidMount(){
		//If component is mounted get snapShot of Database red 'event' value
		let app = this.props.db.database().ref('events');
	    app.on('value', snapshot => {
	      this.getData(snapshot.val());
    	});
  	}
	state={
		events:[],
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
	  
	  //get Key of the event and delete it from the dataBase
  	deleteData = ( keys )=>{
  		let app = this.props.db.database().ref('events');
  		app.child(keys).remove()
  	}
	render() {
		//array.map data ref event
		let messageNodes = this.state.events.map((event) => {
			return (
				<tr>
			      <td> {event.name} </td>
			      <td> {event.date}</td>
			      <td> {event.nbr} </td>
			      <td>{event.location}</td>
			      <td>{event.hours}</td>
			      <td>
			      	<button onClick={()=> this.deleteData(event.key)} > 
			      		<i className="fas fa-times"/>
			      	</button>
			      </td>
			    </tr>
		      )
	    	});
		return (
			<table className="table">
				<thead>
				    <tr>
				      <th>Nom</th>
				      <th>date</th>
				      <th>billets dispo</th>
				      <th>localisation</th>
				      <th>heure</th>
				      <th>supprimer</th>
				    </tr>
			  	</thead>
				{messageNodes}
			</table>
		);
	}
}
