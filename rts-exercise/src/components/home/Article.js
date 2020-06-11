import React, { Component } from 'react';

export class Article extends Component {
	render() {
		const { article } = this.props;

		return (
			<div>
				<h5>{article.title}</h5>
			</div>
		);
	}
}

export default Article;
