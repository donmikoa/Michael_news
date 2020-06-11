import React, { useState } from 'react';
import Search from './components/Search';
import './App.css';
import axios from 'axios';
import Results from './components/Results';

function App() {
	const [state, setState] = useState({
		query: '',
		results: [],
	});

	const searchUrls = 'http://hn.algolia.com/api/v1/search?tags=story';

	const search = (e) => {
		if (e.key === 'Enter') {
			axios(searchUrls + '&query=' + state.query).then(({ data }) => {
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
			<Search handleInput={handleInput} search={search} />
			<Results results={state.results} />
		</div>
	);
}

export default App;
