import React, { Component } from 'react';

export default class BuyTicket extends Component {
	state={
		userName:'',
		userMail:'',
		userFirstName:'',
		countTcks:''
	}
	onChange= e =>{
	  	this.setState({
	        [e.target.name]:e.target.value
	  	});
  	}
  	sendEvent= e =>{
		if(this.state.userName !== '' && this.state.userMail !== '' && this.state.userFirstName !== '' && this.state.countTcks !== '' ){
		  e.preventDefault();
		  let dbCon = this.props.db.database().ref('/reserved');
		  dbCon.push({
		    name: this.state.userName,
		    mail : this.state.userMail,
		    firtName : this.state.userFirstName,
		    Tickets : this.state.countTcks
		  });
		  this.setState({
		    userName:'',
			userMail:'',
			userFirstName:'',
			countTcks:''
		  });
		}
	}
	
	render() { 
		console.log(this.state)
		return (
			<form>
				<div class="field">
				  <label class="label">Name</label>
				  <div class="control">
				    <input class="input" onChange={this.onChange} name="userName"  type="text" placeholder="e.g Alex Smith"/>
				  </div>
				</div>

				<div class="field">
				  <label class="label">First Name</label>
				  <div class="control">
				    <input class="input" onChange={this.onChange} name="userFirstName"   type="text" placeholder="e.g Alex Smith"/>
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
					    <select onChange={this.onChange} name="countTcks" >
					      <option value="1">1</option>
					      <option value="2">2</option>
					      <option value="3">3</option>
					      <option value="4">4</option>
					      <option value="5">5</option>
					    </select>
				  	</div>
				</div>
				<a className="button is-danger" onClick={this.sendEvent} > Reserver sa (ses) place en ligne</a>

			</form>
		);
	}
}
