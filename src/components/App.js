import React, { Component } from 'react';
import Routes from '../routes'
import Header from './Header/Header';
import './App.css';

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