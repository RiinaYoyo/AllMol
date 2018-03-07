import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<nav className="navbar">
		        <div className="navbar-brand">
		          <Link className="navbar-item" to="/">
		            Buy Tickets
		          </Link>
		          <Link className="navbar-item" to="/Manage">
		            Add event
		          </Link>
		        </div>
	      	</nav>
		);
	}
}
