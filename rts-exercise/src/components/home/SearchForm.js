import React, { Component } from 'react';
import { searchNews, fetchNews } from '../../actions/searchActions';
import { connect } from 'react-redux';

export class SearchForm extends Component {
	onChange = (e) => {
		this.props.searchNews(e.target.value);
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.fetchNews(this.props.text);
	};

	render() {
		return (
			<div>
				<div>
					<h1>Welcome to Hacker News</h1>
					<form id='searchForm' onSubmit={this.onSubmit}>
						<input
							type='text'
							className='form-control search-label'
							name='searchText'
							placeholder='Search News...'
							onChange={this.onChange}
						></input>
						<button type='submit' className='btn btn-primary btn-bg mt-3'>
							Search
						</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.news.text,
});

export default connect(mapStateToProps, { searchNews, fetchNews })(SearchForm);
