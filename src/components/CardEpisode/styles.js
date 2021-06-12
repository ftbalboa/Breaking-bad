import styled from 'styled-components';

export const StyledCard = styled.article`
	width: 15em;
	padding: 1em;
	margin: 0.5em;
	background-color: #2b2a31;
	color: white;
	border-radius: 0.5em;

	h2 {
		font-weight: 500;
		margin-bottom: 0.5em;
		text-align: center;
		min-height: 3em;
	}

	.card-info {
		display: flex;
		justify-content: space-between;
		margin-bottom: 0.5em;
	}

	.card-season,
	.card-episode,
	.card-date {
		font-size: 1.5em;
		text-align: center;
		margin-bottom: 1em;

		span {
			display: block;
			color: #a19eb8;
			font-size: 0.5em;
			font-weight: 600;
			letter-spacing: 1px;
			text-transform: uppercase;
		}
	}

	.card-date {
		font-size: 1.25em;
	}

	button {
		display: block;
		margin: 0 auto;
		padding: 1em 1.5em;
		border: 0;
		color: white;
		font-family: inherit;
		font-weight: 600;
		text-transform: uppercase;
		font-size: 0.6em;
		letter-spacing: 1px;
		background-color: #0a0a0b;
		border-radius: 0.35em;
		cursor: pointer;

		&:hover {
			transform: scale(1.1);
		}
	}

	a {
		text-decoration: none;
	}
`;
