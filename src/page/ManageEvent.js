import React, { Component } from 'react';
import EventListAdmin from '../components/EventListAdmin';//Import the event List for Admin
import AddEvent from '../components/AddEvent'; //Add other Events Interface
import firebase from 'firebase';

export default class ManageEvent extends Component {
	state={
		modalDisplay: 'none' ,//used for modal configuration
	}
	//Show or Hide the modal
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
				  {/* Render List for admin */}
		            <EventListAdmin db={firebase}/>
		          </div>		          
		        </div>
		        <div style={{display: 'flex', justifyContent: 'center'}}>
					{/* Button to Show modal   */}
		        	<button onClick={this.showModal} className="button is-info">
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
							{/* Add the AddEvent Form in the Modal */}
			            	<AddEvent db={firebase}
			            	closeModal={this.showModal} />
			          	</div>
		        	</div>
	        	</div>
		        
	      	</div>);
	}
}
