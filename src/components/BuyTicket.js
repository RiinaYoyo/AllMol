import React, { Component } from 'react';

export default class BuyTicket extends Component {
	state={
		userName:'',
		userMail:'',
		userFirstName:'',
		userTcks:'',
		tcktLeft:this.props.ticketLeft
	}
	onChange= e =>{
	  	this.setState({
	        [e.target.name]:e.target.value
	  	});
  	}
  	reserveTickets= e =>{
  		console.log(this.state)
		if(this.state.userTcks<this.state.ticketLeft && this.state.userName !== '' && this.state.userMail !== '' && this.state.userFirstName !== '' && this.state.userTcks !== '' ){



			e.preventDefault();
			let currentId = this.props.currentEvent;
			let newTcks = this.props.ticketLeft - this.state.userTcks;
			console.log(currentId);	
			let dbCon = this.props.db.database();
			dbCon.ref('/events').child(currentId).update({
				nbr : newTcks 
			})
			dbCon.ref('/reserved').push({
				name: this.state.userName,
				mail : this.state.userMail,
				firtName : this.state.userFirstName,
				nbr : this.state.userTcks,
				eventId: currentId
			});
			this.setState({
				userName:'',
				userMail:'',
				userFirstName:'',
				userTcks:''
			});
		}
	}
	
	render() { 

		return (
			<form>
				<div class="field">
				  <label class="label">Name</label>
				  <div class="control">
				    <input class="input" onChange={this.onChange} name="userName"  type="text" placeholder="e.g Alex"/>
				  </div>
				</div>

				<div class="field">
				  <label class="label">First Name</label>
				  <div class="control">
				    <input class="input" onChange={this.onChange} name="userFirstName" type="text" placeholder="e.g Smith"/>
				  </div>
				</div>

				<div class="field">
				  <label class="label">Email</label>
				  <div class="control">
				    <input class="input" onChange={this.onChange} name="userMail"  type="email" placeholder="e.g. alexsmith@gmail.com"/>
				  </div>
				</div>

				<div class="control">
					<label class="label">Nombre de tickets</label>
				  	<div class="select">
					    <select onChange={this.onChange} name="userTcks" >
					      <option value="1">1</option>
					      <option value="2">2</option>
					      <option value="3">3</option>
					      <option value="4">4</option>
					      <option value="5">5</option>
					    </select>
				  	</div>
				</div>
				<div style={{display: 'flex', justifyContent:'space-around'}}>
				<a className="button is-success" onClick={this.reserveTickets} > Valider</a>
				<a className="button is-danger">
					<div onClick={this.props.closeModal}>annuler</div>
				</a>
				</div>
			</form>
		);
	}
}
