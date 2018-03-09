import React, { Component } from 'react';
import trim from 'trim';

export default class AddEvent extends Component {
	state = {
	  	eventName:'',
	    eventDesc:'',
	    eventImg:'',
	    eventCount:'',
	    eventHours:'',
	    eventLocation:'',
	    eventDate:'',


    }
    onChange= e =>{
	  	this.setState({
	        [e.target.name]:e.target.value
	  	});
  	}
  	sendEvent= e =>{
  		let closeModal = this.props.closeModal
		if(this.state.eventName !== '' && this.state.eventDesc !== '' && this.state.eventImg !== '' && this.state.eventCount !== ''  && this.state.eventHours !== ''  && this.state.eventLocation !== '' && this.state.eventDate !== ''   ){
		  e.preventDefault();
		  let dbCon = this.props.db.database().ref('/events');
		  dbCon.push({
		    name: this.state.eventName,
		    desc : this.state.eventDesc,
		    img : this.state.eventImg,
		    nbr : this.state.eventCount,
		    hours : this.state.eventHours,
		    location : this.state.eventLocation,
		    date : this.state.eventDate
		  });
		  this.setState({
		    eventName:'',
		    eventDesc:'',
		    eventImg:'',
		    eventCount:'',
		    eventHours:'',
		    eventLocation:'',
		    eventDate:'',
		  });
		  ()=>{
		  	closeModal
		  }
		}
		else{
			alert('Vous devez remplir tous les champs pour valider votre requête ')
		}
	}
	render() {
		return (
			<form style={{height:'100vh', overflow: 'scroll'}} >
				<h2 style={{textAlign:'center',fontSize:'150%' }} > 
					<br/>
					<strong>Ajouter un evênement à la liste </strong> 
					<br/><br/><br/>
				</h2> 
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
				  <label className="label">Url de l'Image</label>
				  <div className="control">
				    <input className="input" type="text" name="eventImg" onChange={this.onChange} />
				  </div>
				</div>
				<div className="field">
				  <label className="label">Heure</label>
				  <div className="control">
				    <input className="input" type="time" name="eventHours" onChange={this.onChange} />
				  </div>
				</div>
				<div className="field">
				  <label className="label">Date</label>
				  <div className="control">
				    <input className="input" type="date" name="eventDate" onChange={this.onChange} />
				  </div>
				</div>
				<div className="field">
				  <label className="label">Localisation</label>
				  <div className="control">
				    <input className="input" type="text" name="eventLocation" onChange={this.onChange} />
				  </div>
				</div>
				<div className="field">
				  <label className="label">Nombre de billets disponible</label>
				  <div className="control">
				    <input className="input" type="text" name="eventCount" onChange={this.onChange} />
				  </div>
				</div>
				<div style={{display: 'flex', justifyContent:'space-around' }} >
					<button onClick={()=>this.sendEvent} 
	            	className="button is-success">
	    				Valider
	    			</button>
	    			<button onClick={()=>this.props.closeModal} 
	            	className="button is-danger">
	    				Fermer
	    			</button>
				</div>
				
	      	</form>
		);
	}
}
