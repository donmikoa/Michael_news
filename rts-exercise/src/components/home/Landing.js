import React, { Component } from 'react';
import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';
import NewsContainer from './NewsContainer';
import { connect } from 'react-redux';

//The component holding the Search Form and News Container
export class Landing extends Component {
	render() {
		const { loading } = this.props;
		return (
			<div className='container'>
				<SearchForm />
				{loading ? <Spinner /> : <NewsContainer />}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	loading: state.news.loading,
});

export default connect(mapStateToProps)(Landing);
