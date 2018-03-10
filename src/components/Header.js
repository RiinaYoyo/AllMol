import React, { Component } from 'react';
import {Link} from 'react-router-dom';//Import the Link of React-Router

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar">
		        <div className="navbar-brand">
							{/* Link to the Home Page */}
		          <Link className="navbar-item" to="/">
		            Buy Tickets
		          </Link>
							{/* Link to Admin Page */}
		          <Link className="navbar-item" to="/Manage">
		            Add event
		          </Link>
		        </div>
	      	</nav>
		);
	}
}
