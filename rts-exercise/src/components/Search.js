import React from 'react';
import '../search.css';
import { connect } from 'react-redux';

function Search({ handleInput, search }) {
	return (
		<div className='container'>
			<h2 className='heading'>Welcome to Hacker News</h2>
			<label className='search-label' htmlFor='Search-input'>
				<input
					type='text'
					name='query'
					id='search-input'
					placeholder='Search...'
					onChange={handleInput}
					onKeyPress={search}
				/>

				<i className='fa fa-search search-icon' aria-hidden='true' />
			</label>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		inputValue: state.search,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleInput: (evt) => {
			const action = { type: 'INPUT_CHANGE', text: evt.target.value };
			dispatch(action);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
