import styled from 'styled-components';

export const StyledNavbar = styled.nav`
	padding: 1em;
	background-color: #084c12;
	text-align: center;
	color: white;

	ul {
		list-style: none;
		display: flex;
		justify-content: center;

		li {
			margin: 0 0.5em;
		}
	}

	a {
		color: inherit;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: 500;
		font-size: 0.8em;
		position: relative;

		&::before {
			content: '';
			display: block;
			position: absolute;
			bottom: -0.2em;
			width: 100%;
			height: 3px;
			background-color: gold;
			font-size: 3em;
			border-radius: 1em;
			transform: scaleX(0);
			transform-origin: left;
			transition: transform 300ms ease;
		}
	}
`;
