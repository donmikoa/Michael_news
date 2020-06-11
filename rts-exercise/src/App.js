//import React, { useState } from 'react';
import React, { Component } from 'react';

import { Provider } from 'react-redux';
import './App.css';
//import axios from 'axios';
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
