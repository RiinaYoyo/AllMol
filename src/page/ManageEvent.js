import React, { Component } from 'react';
import EventListAdmin from '../components/EventListAdmin';
import AddEvent from '../components/AddEvent';
import firebase from 'firebase';

export default class ManageEvent extends Component {
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
		          <div className="column is-2"></div>
		          <div className="column is-8">
		            <EventListAdmin db={firebase}/>
		          </div>		          
		        </div>
		        <div style={{display: 'flex', justifyContent: 'center'}}>
		        	<button onClick={this.showModal} className="button">
		        		Ajouter un Êvenement
		        	</button>		        	
		        </div>
		        
		        <div
	        	className="modal" 
	        	style={{display:this.state.modalDisplay , backgroundColor:'black'}} >	
	        		<div className="columns" style={{overflow:'scrollbar'}} >
			          	<div className="column is-3"></div>
			          	<div className="column is-6"  
			          	style={{backgroundColor:'white'}}>
			            	<AddEvent db={firebase}
			            	closeModal={this.showModal} />
			            	
		        			
			          	</div>
		        	</div>
	        	</div>
		        
	      	</div>);
	}
}
