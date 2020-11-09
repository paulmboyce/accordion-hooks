import React from "react";

const DisplayResults = ({ results, linkUrl }) => {
	const renderResults = results.map((result) => {
		return (
			<div className='item' key={result.pageid}>
				<div className='right floated content'>
					<a
						href={`${linkUrl}=${result.pageid}`}
						// eslint-disable-next-line react/jsx-no-target-blank
						target='_blank'
						className='ui button blue'
					>
						Wikipedia
					</a>
				</div>
				<div className='content'>
					<div className='header'>{result.title}</div>
					<div className='description'>
						<span
							dangerouslySetInnerHTML={{
								__html: result.snippet,
							}}
						></span>
					</div>
				</div>
			</div>
		);
	});

	return (
		<div>
			{" "}
			<h3>Search Results</h3>
			<div className='ui middle aligned divided list'>
				{renderResults}
			</div>
		</div>
	);
};

export default DisplayResults;
