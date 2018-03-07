import React, { Component } from 'react';
import trim from 'trim';

export default class AddEvent extends Component {
	state = {
	  	eventName:'',
	    eventDesc:'',
	    eventImg:'',
	    eventCount:''
    }
    onChange= e =>{
	  	this.setState({
	        [e.target.name]:e.target.value
	  	});
  	}
  	sendEvent= e =>{
		if(this.state.eventName !== '' && this.state.eventDesc !== '' && this.state.eventImg !== ''){
		  e.preventDefault();
		  let dbCon = this.props.db.database().ref('/events');
		  dbCon.push({
		    name: this.state.eventName,
		    desc : this.state.eventDesc,
		    Img : this.state.eventImg,
		    Nbr : this.state.eventCount
		  });
		  this.setState({
		    eventName:'',
		    eventDesc:'', 
		    eventImg:'',
		    eventCount:''
		  });
		}
	}
	render() {
		return (
			<form >
				<div className="field">
				  <label className="label">Nom de l'êvenement</label>
				  <div className="control">
				    <input className="input" type="text" name="eventName"onChange={this.onChange}/>
				  </div>
				</div>

				<div className="field">
				  <label className="label">Decription de l'êvenement</label>
				  <div className="control">
				    <input className="input" type="text" name="eventDesc" onChange={this.onChange}/>
				  </div>
				</div>

				<div className="field">
				  <label className="label">url de l'êvenement</label>
				  <div className="control">
				    <input className="input" type="text" name="eventImg" onChange={this.onChange} />
				  </div>
				</div>
				<div className="field">
				  <label className="label">Nombre de billets disponible</label>
				  <div className="control">
				    <input className="input" type="text" name="eventCount" onChange={this.onChange} />
				  </div>
				</div>
				<a className="button is-danger" onClick={this.sendEvent} > Ajouter un êvenement</a>
	      	</form>
		);
	}
}
