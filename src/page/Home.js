import React, { Component } from 'react';
import firebase from 'firebase';
import EventListUser from '../components/EventListUser'
import BuyTicket from '../components/BuyTicket'

export default class Home extends Component {
	state={
		modalDisplay: 'none' ,
	}
	showModal=()=>{
		this.state.modalDisplay === 'none'?
			this.setState({
				modalDisplay:'block'
			}):
			this.setState({
				modalDisplay:'none'
			})
	}
	render() {
		return (
			<div className="container">
				<div className="columns">
		        	<div className="column is-3"></div>
	        		<div className="column is-6">
		            	<EventListUser db={firebase}/>
	        		</div>
	        	</div>
	        	<div
	        	className="modal" 
	        	style={{display:this.state.modalDisplay}} >
	        		
	        	</div>
	        	<div className="columns">
		        	<div className="column is-3"></div>
	        		<div className="column is-6">
		            	<BuyTicket db={firebase}/>
	        		</div>
	        	</div>
			</div> 
		);
	}
}
