//Importing dependencies and components
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Landing from './components/home/Landing';
import store from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Landing />
			</Provider>
		);
	}
}

export default App;
