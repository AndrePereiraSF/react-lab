import React, { Component } from 'react';
import Routes from '../routes'
import './App.css';
import Header from './Header/Header';

class App extends Component {
	render() {
		return (
			<div>
				<Header />
				<Routes />
			</div>
		);
	}
}

export default App