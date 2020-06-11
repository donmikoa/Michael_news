import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from './Article';

//Responsible for loading the new items.
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
		return <div>{content}</div>;
	}
}

const mapStateToProps = (state) => ({
	news: state.news.news,
});
export default connect(mapStateToProps)(NewsContainer);
