import { StyledNavbar } from './styles';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	return (
		<StyledNavbar>
			<ul>
				<li>
					<Link to='/'>Episodios</Link>
				</li>
				<li>
					<Link to='/personajes'>Personajes</Link>
				</li>
			</ul>
		</StyledNavbar>
	);
};
