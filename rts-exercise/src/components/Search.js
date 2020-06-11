import React from 'react';
import '../search.css';

function Search({ handleInput, search }) {
	return (
		<div className='container'>
			<h2 className='heading'>Welcome to Hacker News</h2>
			<label className='search-label' htmlFor='Search-input'>
				<input
					type='text'
					name='query'
					id='search-input'
					placeholder='Search latest news...'
					onChange={handleInput}
					onKeyPress={search}
				/>

				<i className='fa fa-search search-icon' aria-hidden='true' />
			</label>
		</div>
	);
}

export default Search;
