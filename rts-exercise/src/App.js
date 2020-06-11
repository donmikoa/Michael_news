import React, { useState } from 'react';
import Search from './components/Search';
import './App.css';
import axios from 'axios';
import Results from './components/Results';
import store from './store/';

function App() {
	const [state, setState] = useState({
		query: '',
		results: [],
	});

	const searchUrl = 'http://hn.algolia.com/api/v1/search?tags=story';

	const search = (e) => {
		if (e.key === 'Enter') {
			axios(searchUrl + '&query=' + state.query).then(({ data }) => {
				let results = data.hits;
				setState((prevState) => {
					return { ...prevState, results: results };
				});
				console.log(data);
			});
		}
	};
	const handleInput = (e) => {
		let query = e.target.value;

		setState((prevState) => {
			return { ...prevState, query: query };
		});
	};
	return (
		<div>
			<Search handleInput={handleInput} search={search} store={store} />
			<Results results={state.results} />
		</div>
	);
}

export default App;
