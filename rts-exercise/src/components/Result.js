import React from 'react';
import '../search.css';

function Result({ result }) {
	return (
		<div className='container'>
			<ul>
				<li>{result.title}</li>
			</ul>
		</div>
	);
}

export default Result;
