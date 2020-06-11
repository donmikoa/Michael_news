import React from 'react';
import Result from './Result';

function Results({ results }) {
	return (
		<section className='container'>
			{results.map((result) => (
				<Result key={result.objectID} result={result} />
			))}
		</section>
	);
}

export default Results;
