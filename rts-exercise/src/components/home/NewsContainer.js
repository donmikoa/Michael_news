import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './Article';

export class NewsContainer extends Component {
	render() {
		const { news } = this.props;
		let content = '';

		content =
			news.length > 0
				? news.map((article, index) => (
						<Article key={index} article={article} />
				  ))
				: null;
		return <div className='row'>{content}</div>;
	}
}

const mapStateToProps = (state) => ({
	news: state.news.news,
});
export default connect(mapStateToProps)(NewsContainer);
